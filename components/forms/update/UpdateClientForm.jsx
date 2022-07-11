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
      `http://localhost:4000/api/clients/${client.id}`,
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
    <form
      onSubmit={handleFormSubmit}
      ref={formRef}
      className='grid grid-cols-2 gap-x-16 gap-y-8 w-full'
    >
      <div>
        <FormInput
          labelText='Name'
          inputName='name'
          defaultValue={client.name}
        />
        <FormInput
          labelText='Primary Contact Name'
          inputName='primaryContactName'
          defaultValue={client.primaryContactName}
        />
        <FormInput
          labelText='Primary Contact Number'
          inputName='primaryContactNumber'
          defaultValue={client.primaryContactNumber}
        />
        <FormInput
          labelText='Primary Contact Email'
          inputName='primaryContactEmail'
          defaultValue={client.primaryContactEmail}
        />
        <FormInput
          labelText='Secondary Contact Number'
          inputName='secondaryContactNumber'
          defaultValue={client.secondaryContactNumber}
        />
        <FormInput
          labelText='Secondary Contact Email'
          inputName='secondaryContactEmail'
          defaultValue={client.secondaryContactEmail}
        />
        <FormTextArea
          labelText='General Notes'
          inputName='generalNotes'
          defaultValue={client.generalNotes}
        />
      </div>
      <div>
        <FormInput
          labelText='Address Line 1'
          inputName='addressLine1'
          defaultValue={client.address.addressLine1}
        />
        <FormInput
          labelText='Address Line 2'
          inputName='addressLine2'
          defaultValue={client.address.addressLine2}
        />
        <FormInput
          labelText='Town'
          inputName='town'
          defaultValue={client.address.town}
        />
        <FormInput
          labelText='County'
          inputName='county'
          defaultValue={client.address.county}
        />
        <FormInput
          labelText='Postcode'
          inputName='postCode'
          defaultValue={client.address.postCode}
        />
        <FormInput
          labelText='Country'
          inputName='country'
          defaultValue={client.address.country}
        />
      </div>
      <div className='col-span-2'>
        <div className='w-max mx-auto'>
          <FormButton text='Update Client Details' />
        </div>
      </div>
    </form>
  );
}
