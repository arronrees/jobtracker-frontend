import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';

export default function UpdateClientJobForm({ client, currentJob }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      title: formValues.get('title'),
      status: formValues.get('status'),
      amount: formValues.get('amount'),
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

  if (!currentJob) {
    return null;
  }

  return (
    <form ref={formRef} onSubmit={handleFormSubmit}>
      <FormInput
        labelText='Job Title'
        inputName='title'
        defaultValue={currentJob.title}
      />
      <div>
        <select name='status' id='status'>
          <option value='quoted'>Quoted</option>
          <option value='in-progress'>In Progress</option>
          <option value='completed'>Completed - To Invoice</option>
        </select>
      </div>
      <FormInput
        labelText='Amount'
        inputName='amount'
        defaultValue={currentJob.amount}
      />
      <FormButton text='Create New Job' />
    </form>
  );
}
