import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function CreateNewClientJob({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      title: formValues.get('title'),
      completed: formValues.get('completed') ? true : false,
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/client-job/${client.id}`,
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
    <form ref={formRef} onSubmit={handleFormSubmit}>
      <FormInput labelText='Job Title' inputName='title' />
      <input type='checkbox' name='completed' id='completed' value={true} />
      <FormButton text='Create New Job' />
    </form>
  );
}
