import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
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
      <FormButton text='Update Client Account Detail' />
    </form>
  );
}
