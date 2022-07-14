import { useRouter } from 'next/router';
import { useRef } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import FormTextArea from '../../formSections/FormTextArea';

export default function ClientForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      client: {
        name: formValues.get('name'),
        primaryContactName: formValues.get('primaryContactName'),
        primaryContactNumber: formValues.get('primaryContactNumber'),
        primaryContactEmail: formValues.get('primaryContactEmail'),
        secondaryContactNumber: formValues.get('secondaryContactNumber'),
        secondaryContactEmail: formValues.get('secondaryContactEmail'),
        generalNotes: formValues.get('generalNotes'),
      },
      address: {
        addressLine1: formValues.get('addressLine1'),
        addressLine2: formValues.get('addressLine2'),
        town: formValues.get('town'),
        county: formValues.get('county'),
        postCode: formValues.get('postCode'),
        country: formValues.get('country'),
      },
    };

    const { data, error } = await sendFetch(
      'http://localhost:4000/api/clients/',
      'POST',
      formDetails
    );

    if (data) {
      router.push(`/clients/${data.data.id}`);
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <FormInput labelText='Name' inputName='name' />
      <FormInput
        labelText='Primary Contact Name'
        inputName='primaryContactName'
      />
      <FormInput
        labelText='Primary Contact Number'
        inputName='primaryContactNumber'
      />
      <FormInput
        labelText='Primary Contact Email'
        inputName='primaryContactEmail'
      />
      <FormInput
        labelText='Secondary Contact Number'
        inputName='secondaryContactNumber'
      />
      <FormInput
        labelText='Secondary Contact Email'
        inputName='secondaryContactEmail'
      />
      <FormTextArea labelText='General Notes' inputName='generalNotes' />
      <p className='font-bold mt-8'>Address</p>
      <FormInput labelText='Address Line 1' inputName='addressLine1' />
      <FormInput labelText='Address Line 2' inputName='addressLine2' />
      <FormInput labelText='Town' inputName='town' />
      <FormInput labelText='County' inputName='county' />
      <FormInput labelText='Postcode' inputName='postCode' />
      <FormInput labelText='Country' inputName='country' />
      <FormButton text='Create New Client' />
    </form>
  );
}
