import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import DeleteDetailButton from '../../formSections/DeleteDetailButton';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function FtpForm({ detail }) {
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
    <div className='pb-4 border-b-2'>
      <form onSubmit={handleFormSubmit} ref={formRef} className='mt-6 pb-2'>
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
        <FormButton text='Update FTP Detail' />
      </form>
      <DeleteDetailButton
        text='Delete FTP Detail'
        detail='ftp'
        id={detail.id}
      />
    </div>
  );
}
