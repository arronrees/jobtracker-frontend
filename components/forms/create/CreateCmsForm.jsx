import { useRouter } from 'next/router';
import { useRef } from 'react';
import FormInput from '../../formSections/FormInput';

export default function CmsForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const sendData = async (body) => {
    const res = await fetch(
      `http://localhost:4000/api/clients/cms-details/${client.id}`,
      {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      return false;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      url: formValues.get('url') ? formValues.get('url') : null,
      email: formValues.get('email') ? formValues.get('email') : null,
      username: formValues.get('username') ? formValues.get('username') : null,
      password: formValues.get('password') ? formValues.get('password') : null,
    };

    const apiRespsonse = await sendData(JSON.stringify(formDetails));

    if (apiRespsonse) {
      router.reload();
    } else {
      console.log(apiRespsonse);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <FormInput labelText='URL' inputName='url' />
      <FormInput labelText='Email' inputName='email' />
      <FormInput labelText='Username' inputName='username' />
      <FormInput labelText='Password' inputName='password' />
      <button
        type='submit'
        className='inline-block text-center font-bold bg-indigo-600 text-white px-8 py-2 rounded-md transition duration-300 hover:bg-indigo-500 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none lg:text-lg'
      >
        Create Cms Detail
      </button>
    </form>
  );
}
