import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import FormSelect from '../../formSections/FormSelect';
import FormDate from '../../formSections/FormDate';
import { companies, departments, jobStatuses } from '../../../constants';
import toast from 'react-hot-toast';
import { getTodaysDate } from '../../../utils/getTodaysDate';

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
      cost: formValues.get('cost').replace('£', ''),
      department: selectedDepartment,
      type: formValues.get('type'),
      completedDate: formValues.get('completedDate')
        ? formValues.get('completedDate')
        : null,
      createdDate: formValues.get('createdDate')
        ? formValues.get('createdDate')
        : null,
    };

    const { data, error } = await sendFetch(
      `http://localhost:4000/api/jobs/${client}`,
      'POST',
      formDetails
    );

    if (data) {
      toast('New job created successfully');
      router.push('/jobs');
    } else {
      toast(error);
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
      <FormInput labelText='Cost' inputName='cost' defaultValue='£0' />
      <FormSelect
        labelText='Department'
        inputName='department'
        options={departments}
        setSelected={setSelectedDepartment}
      />
      <FormDate
        labelText='Created Date'
        inputName='createdDate'
        defaultValue={getTodaysDate()}
      />
      <FormDate labelText='Completed Date' inputName='completedDate' />
      <FormButton text='Create New Job' />
    </form>
  );
}
