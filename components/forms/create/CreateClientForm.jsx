import { useRouter } from 'next/router';
import { useRef } from 'react';
import FormInput from '../../formSections/FormInput';
import FormTextArea from '../../formSections/FormTextArea';

export default function ClientForm({ client }) {
  const router = useRouter();

  const formRef = useRef(null);

  const sendData = async (body) => {
    const res = await fetch(`http://localhost:4000/api/clients/`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      return false;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      client: {
        name: formValues.get('name') ? formValues.get('name') : null,
        primaryContactNumber: formValues.get('primaryContactNumber')
          ? formValues.get('primaryContactNumber')
          : null,
        primaryContactEmail: formValues.get('primaryContactEmail')
          ? formValues.get('primaryContactEmail')
          : null,
        secondaryContactNumber: formValues.get('secondaryContactNumber')
          ? formValues.get('secondaryContactNumber')
          : null,
        secondaryContactEmail: formValues.get('secondaryContactEmail')
          ? formValues.get('secondaryContactEmail')
          : null,
        logo: formValues.get('logo') ? formValues.get('logo') : null,
        generalNotes: formValues.get('generalNotes')
          ? formValues.get('generalNotes')
          : null,
      },
      address: {
        addressLine1: formValues.get('addressLine1')
          ? formValues.get('addressLine1')
          : null,
        addressLine2: formValues.get('addressLine2')
          ? formValues.get('addressLine2')
          : null,
        town: formValues.get('town') ? formValues.get('town') : null,
        county: formValues.get('county') ? formValues.get('county') : null,
        postCode: formValues.get('postCode')
          ? formValues.get('postCode')
          : null,
        country: formValues.get('country') ? formValues.get('country') : null,
      },
    };

    const apiRespsonse = await sendData(JSON.stringify(formDetails));

    if (apiRespsonse) {
      router.reload();
    } else {
      console.log(apiRespsonse);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} ref={formRef}>
      <FormInput labelText='Name' inputName='name' />
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
      <p className='font-bold'>Address</p>
      <FormInput labelText='Address Line 1' inputName='addressLine1' />
      <FormInput labelText='Address Line 2' inputName='addressLine2' />
      <FormInput labelText='Town' inputName='town' />
      <FormInput labelText='County' inputName='county' />
      <FormInput labelText='Postcode' inputName='postCode' />
      <FormInput labelText='Country' inputName='country' />
      <button
        type='submit'
        className='inline-block text-center font-bold bg-indigo-600 text-white px-8 py-2 rounded-md transition duration-300 hover:bg-indigo-500 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none lg:text-lg'
      >
        Create New Client
      </button>
    </form>
  );
}
