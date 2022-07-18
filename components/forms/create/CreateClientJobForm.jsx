import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import FormSelect from '../../formSections/FormSelect';
import FormDate from '../../formSections/FormDate';
import { companies, departments, jobStatuses } from '../../../constants';

export default function CreateClientJobForm({ clients }) {
  const router = useRouter();

  const formRef = useRef(null);

  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [client, setClient] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      company: selectedCompany,
      title: formValues.get('title'),
      status: selectedStatus,
      cost: formValues.get('cost'),
      department: selectedDepartment,
      type: formValues.get('type'),
      completedDate: formValues.get('completedDate')
        ? formValues.get('completedDate')
        : null,
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/jobs/${client}`,
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
    <form ref={formRef} onSubmit={handleFormSubmit} className='w-full'>
      <FormSelect
        labelText='Company To Bill From'
        inputName='company'
        options={companies}
        setSelected={setSelectedCompany}
      />
      <FormSelect
        labelText='Client'
        inputName='client'
        options={clients}
        setSelected={setClient}
      />
      <FormInput labelText='Job Title' inputName='title' />
      <FormSelect
        labelText='Status'
        inputName='status'
        options={jobStatuses}
        setSelected={setSelectedStatus}
      />
      <FormInput labelText='Cost' inputName='cost' />
      <FormSelect
        labelText='Department'
        inputName='department'
        options={departments}
        setSelected={setSelectedDepartment}
      />
      <FormDate labelText='Created Date' inputName='createdDate' />
      <FormDate labelText='Completed Date' inputName='completedDate' />
      <FormButton text='Create New Job' />
    </form>
  );
}
