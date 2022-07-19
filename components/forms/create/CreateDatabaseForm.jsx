import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import toast from 'react-hot-toast';

export default function DatabaseForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      url: formValues.get('url'),
      databaseName: formValues.get('databaseName'),
      username: formValues.get('username'),
      password: formValues.get('password'),
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/database-details/${client.id}`,
      'POST',
      formDetails
    );

    if (data) {
      toast('Database account created successfully');
      router.reload();
    } else {
      toast(error);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef} className='w-full'>
      <FormInput labelText='URL' inputName='url' />
      <FormInput labelText='Databse Name' inputName='databaseName' />
      <FormInput labelText='Username' inputName='username' />
      <FormInput labelText='Password' inputName='password' />
      <FormButton text='Create Database Detail' />
    </form>
  );
}
