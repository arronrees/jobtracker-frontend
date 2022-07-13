import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import FormCheckbox from '../../formSections/FormCheckbox';
import FormSelect from '../../formSections/FormSelect';

export default function UpdateClientJobForm({ client, currentJob }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      title: formValues.get('title'),
      status: formValues.get('status'),
      cost: formValues.get('cost'),
      includingVat: formValues.get('includingVat'),
      department: formValues.get('department'),
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/clients/client-job/${currentJob.id}`,
      'PUT',
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
      <FormSelect labelText='Status' inputName='status'>
        {currentJob.status === 'quote' && (
          <>
            <option value='quote' selected>
              Quote
            </option>
            <option value='in-progress'>In Progress</option>
            <option value='complete'>Completed</option>
          </>
        )}
        {currentJob.status === 'in-progress' && (
          <>
            <option value='in-progress' selected>
              In Progress
            </option>
            <option value='in-progress'>Quote</option>
            <option value='complete'>Completed</option>
          </>
        )}
        {currentJob.status === 'complete' && (
          <>
            <option value='complete'>Completed</option>
            <option value='quote'>Quote</option>
            <option value='in-progress'>In Progress</option>
          </>
        )}
      </FormSelect>
      <FormInput
        labelText='Cost'
        inputName='cost'
        defaultValue={currentJob.cost}
      />
      <FormCheckbox
        labelText='Including VAT'
        inputName='includingVat'
        defaultValue={currentJob.includingVat}
      />
      <FormSelect labelText='Department' inputName='department'>
        <option value='web'>Web</option>
        <option value='print'>Print</option>
        <option value='other'>Other</option>
      </FormSelect>
      <FormButton text='Update Job' />
    </form>
  );
}
