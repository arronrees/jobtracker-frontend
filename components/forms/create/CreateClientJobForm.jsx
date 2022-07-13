import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormCheckbox from '../../formSections/FormCheckbox';
import FormInput from '../../formSections/FormInput';
import FormSelect from '../../formSections/FormSelect';

export default function CreateClientJobForm({ client }) {
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
      `http://localhost:4000/api/jobs/${client.id}`,
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
      <FormSelect labelText='Status' inputName='status'>
        <option value='Quote'>Quote</option>
        <option value='In Progress'>In Progress</option>
        <option value='Complete'>Completed</option>
      </FormSelect>
      <FormInput labelText='Cost' inputName='cost' />
      <FormCheckbox labelText='Including VAT' inputName='includingVat' />
      <FormSelect labelText='Department' inputName='department'>
        <option value='Web'>Web</option>
        <option value='Print'>Print</option>
        <option value='Other'>Other</option>
      </FormSelect>
      <FormButton text='Create New Job' />
    </form>
  );
}
