import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function CmsForm({ detail }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      url: formValues.get('url') ? formValues.get('url') : null,
      email: formValues.get('email') ? formValues.get('email') : null,
      username: formValues.get('username') ? formValues.get('username') : null,
      password: formValues.get('password') ? formValues.get('password') : null,
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/cms-details/${detail.id}`,
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
        labelText='Email'
        inputName='email'
        defaultValue={detail.email}
      />
      <FormInput
        labelText='Username'
        inputName='username'
        defaultValue={detail.username}
      />
      <FormInput
        labelText='Password'
        inputName='password'
        defaultValue={detail.password}
      />
      <FormButton text='Update Cms Detail' />
    </form>
  );
}
