import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormInput from '../../formSections/FormInput';

export default function FtpForm({ detail }) {
  const router = useRouter();

  const formRef = useRef(null);

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

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/ftp-details/${detail.id}`,
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
      <FormInput labelText='URL' inputName='url' defaultValue={detail.url} />
      <FormInput
        labelText='FTP Address'
        inputName='ftpAddress'
        defaultValue={detail.ftpAddress}
      />
      <FormInput
        labelText='Host Directory'
        inputName='hostDirectory'
        defaultValue={detail.hostDirectory}
      />
      <FormInput
        labelText='Login'
        inputName='login'
        defaultValue={detail.login}
      />
      <FormInput
        labelText='Password'
        inputName='password'
        defaultValue={detail.password}
      />
      <button
        type='submit'
        className='inline-block text-center font-bold bg-indigo-600 text-white px-8 py-2 rounded-md transition duration-300 hover:bg-indigo-500 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none lg:text-lg'
      >
        Update Ftp Detail
      </button>
    </form>
  );
}
