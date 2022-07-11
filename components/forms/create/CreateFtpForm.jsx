import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function FtpForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      url: formValues.get('url'),
      ftpAddress: formValues.get('ftpAddress'),
      hostDirectory: formValues.get('hostDirectory'),
      login: formValues.get('login'),
      password: formValues.get('password'),
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/ftp-details/${client.id}`,
      'POST',
      formDetails
    );

    if (data) {
      router.reload();
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef} className='w-full'>
      <FormInput labelText='URL' inputName='url' />
      <FormInput labelText='FTP Address' inputName='ftpAddress' />
      <FormInput labelText='Host Directory' inputName='hostDirectory' />
      <FormInput labelText='Login' inputName='login' />
      <FormInput labelText='Password' inputName='password' />
      <FormButton text='Create Ftp Detail' />
    </form>
  );
}
