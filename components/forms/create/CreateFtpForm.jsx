import { useRouter } from 'next/router';
import { useRef } from 'react';
import FormInput from '../../formSections/FormInput';

export default function FtpForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const sendData = async (body) => {
    const res = await fetch(
      `http://localhost:4000/api/clients/ftp-details/${client.id}`,
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
      ftpAddress: formValues.get('ftpAddress')
        ? formValues.get('ftpAddress')
        : null,
      hostDirectory: formValues.get('hostDirectory')
        ? formValues.get('hostDirectory')
        : null,
      login: formValues.get('login') ? formValues.get('login') : null,
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
      <FormInput labelText='FTP Address' inputName='ftpAddress' />
      <FormInput labelText='Host Directory' inputName='hostDirectory' />
      <FormInput labelText='Login' inputName='login' />
      <FormInput labelText='Password' inputName='password' />
      <button
        type='submit'
        className='inline-block text-center font-bold bg-indigo-600 text-white px-8 py-2 rounded-md transition duration-300 hover:bg-indigo-500 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none lg:text-lg'
      >
        Create Ftp Detail
      </button>
    </form>
  );
}
