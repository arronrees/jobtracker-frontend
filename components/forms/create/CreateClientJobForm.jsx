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
      <FormSelect labelText='Status' inputName='status'>
        <option value='quote'>Quote</option>
        <option value='in-progress'>In Progress</option>
        <option value='complete'>Completed</option>
      </FormSelect>
      <FormInput labelText='Cost' inputName='cost' />
      <FormCheckbox labelText='Including VAT' inputName='includingVat' />
      <FormSelect labelText='Department' inputName='department'>
        <option value='web'>Web</option>
        <option value='print'>Print</option>
        <option value='other'>Other</option>
      </FormSelect>
      <FormButton text='Create New Job' />
    </form>
  );
}
