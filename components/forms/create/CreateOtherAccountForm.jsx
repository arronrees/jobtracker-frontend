import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import FormTextArea from '../../formSections/FormTextArea';

export default function OtherAccountForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      name: formValues.get('name'),
      username: formValues.get('username'),
      email: formValues.get('email'),
      password: formValues.get('password'),
      notes: formValues.get('notes'),
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/other-details/${client.id}`,
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
      <FormInput labelText='Name' inputName='name' />
      <FormInput labelText='Username' inputName='username' />
      <FormInput labelText='Email' inputName='email' />
      <FormInput labelText='Password' inputName='password' />
      <FormTextArea labelText='Notes' inputName='notes' />
      <FormButton text='Create Client Account Detail' />
    </form>
  );
}
