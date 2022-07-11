import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import DeleteDetailButton from '../../formSections/DeleteDetailButton';
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
      name: formValues.get('name'),
      username: formValues.get('username'),
      email: formValues.get('email'),
      password: formValues.get('password'),
      notes: formValues.get('notes'),
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
    <div className='border-b-2 pb-4'>
      <form
        onSubmit={handleFormSubmit}
        ref={formRef}
        className='mt-6 w-full pb-2'
      >
        <FormInput
          labelText='Name'
          inputName='name'
          defaultValue={detail.name}
        />
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
      <DeleteDetailButton
        text='Delete Client Account Detail'
        detail='other'
        id={detail.id}
      />
    </div>
  );
}
