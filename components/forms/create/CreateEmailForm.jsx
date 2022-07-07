import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function EmailForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      domain: formValues.get('domain') ? formValues.get('domain') : null,
      email: formValues.get('email') ? formValues.get('email') : null,
      password: formValues.get('password') ? formValues.get('password') : null,
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/email-details/${client.id}`,
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
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <FormInput labelText='Domain' inputName='domain' />
      <FormInput labelText='Email' inputName='email' />
      <FormInput labelText='Password' inputName='password' />
      <FormButton text='Create Email Detail' />
    </form>
  );
}
