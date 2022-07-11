import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import DeleteDetailButton from '../../formSections/DeleteDetailButton';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function DatabaseForm({ detail }) {
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
      `http://localhost:4000/api/clients/database-details/${detail.id}`,
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
        <FormInput labelText='URL' inputName='url' defaultValue={detail.url} />
        <FormInput
          labelText='Databse Name'
          inputName='databaseName'
          defaultValue={detail.databaseName}
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
        <FormButton text='Update Database Detail' />
      </form>
      <DeleteDetailButton
        text='Delete Database Detail'
        detail='database'
        id={detail.id}
      />
    </div>
  );
}
