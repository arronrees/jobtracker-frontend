import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormInput from '../../formSections/FormInput';
import FormTextArea from '../../formSections/FormTextArea';

export default function OtherAccountForm({ detail }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      name: formValues.get('name') ? formValues.get('name') : null,
      username: formValues.get('username') ? formValues.get('username') : null,
      email: formValues.get('email') ? formValues.get('email') : null,
      password: formValues.get('password') ? formValues.get('password') : null,
      notes: formValues.get('notes') ? formValues.get('notes') : null,
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/other-details/${detail.id}`,
      'PUT',
      formDetails
    );

    if (data) {
      router.reload();
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <FormInput labelText='Name' inputName='name' defaultValue={detail.name} />
      <FormInput
        labelText='Username'
        inputName='username'
        defaultValue={detail.username}
      />
      <FormInput
        labelText='Email'
        inputName='email'
        defaultValue={detail.email}
      />
      <FormInput
        labelText='Password'
        inputName='password'
        defaultValue={detail.password}
      />
      <FormTextArea
        labelText='Notes'
        inputName='notes'
        defaultValue={detail.notes}
      />
      <button
        type='submit'
        className='inline-block text-center font-bold bg-indigo-600 text-white px-8 py-2 rounded-md transition duration-300 hover:bg-indigo-500 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none lg:text-lg'
      >
        Update Client Account Detail
      </button>
    </form>
  );
}
