import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import DeleteDetailButton from '../../formSections/DeleteDetailButton';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function EmailForm({ detail }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      domain: formValues.get('domain'),
      email: formValues.get('email'),
      password: formValues.get('password'),
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/email-details/${detail.id}`,
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
      <form
        onSubmit={handleFormSubmit}
        ref={formRef}
        className='mt-6 w-full pb-2'
      >
        <FormInput
          labelText='Domain'
          inputName='domain'
          defaultValue={detail.domain}
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
        <FormButton text='Update Email Detail' />
      </form>
      <DeleteDetailButton
        text='Delete Email Detail'
        detail='email'
        id={detail.id}
      />
    </div>
  );
}
