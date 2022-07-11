import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import DeleteDetailButton from '../../formSections/DeleteDetailButton';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function CmsForm({ detail }) {
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
    <div className='pb-4 border-b-2'>
      <form
        onSubmit={handleFormSubmit}
        ref={formRef}
        className='mt-6 w-full pb-2'
      >
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
        <FormButton text='Update CMS Detail' />
      </form>
      <DeleteDetailButton
        text='Delete CMS Detail'
        detail='cms'
        id={detail.id}
      />
    </div>
  );
}
