import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function CmsForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      url: formValues.get('url'),
      email: formValues.get('email'),
      username: formValues.get('username'),
      password: formValues.get('password'),
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/cms-details/${client.id}`,
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
      <FormInput labelText='Email' inputName='email' />
      <FormInput labelText='Username' inputName='username' />
      <FormInput labelText='Password' inputName='password' />
      <FormButton text='Create Cms Detail' />
    </form>
  );
}
