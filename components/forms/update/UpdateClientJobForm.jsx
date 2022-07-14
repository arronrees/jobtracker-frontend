import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import FormCheckbox from '../../formSections/FormCheckbox';
import FormSelect from '../../formSections/FormSelect';
import FormDate from '../../formSections/FormDate';

export default function UpdateClientJobForm({ currentJob }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      title: formValues.get('title'),
      status: formValues.get('status'),
      cost: formValues.get('cost'),
      includingVat: formValues.get('includingVat') ? true : false,
      department: formValues.get('department'),
      type: formValues.get('type'),
      completedDate: formValues.get('completedDate'),
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/jobs/${currentJob.id}`,
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
        {currentJob.status === 'Quote' && (
          <>
            <option value='Quote'>Quote</option>
            <option value='In Progress'>In Progress</option>
            <option value='Complete'>Completed</option>
          </>
        )}
        {currentJob.status === 'In Progress' && (
          <>
            <option value='In Progress'>In Progress</option>
            <option value='In Progress'>Quote</option>
            <option value='Complete'>Completed</option>
          </>
        )}
        {currentJob.status === 'Complete' && (
          <>
            <option value='Complete'>Completed</option>
            <option value='Quote'>Quote</option>
            <option value='In Progress'>In Progress</option>
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
        {currentJob.department === 'Web' && (
          <>
            <option value='Web'>Web</option>
            <option value='Print'>Print</option>
            <option value='Other'>Other</option>
          </>
        )}
        {currentJob.department === 'Print' && (
          <>
            <option value='Print'>Print</option>
            <option value='Web'>Web</option>
            <option value='Other'>Other</option>
          </>
        )}
        {currentJob.department === 'Other' && (
          <>
            <option value='Other'>Other</option>
            <option value='Web'>Web</option>
            <option value='Print'>Print</option>
          </>
        )}
      </FormSelect>
      <FormDate
        labelText='Completed At'
        inputName='completedDate'
        defaultValue={currentJob.completedDate}
      />
      <FormButton text='Update Job' />
    </form>
  );
}
