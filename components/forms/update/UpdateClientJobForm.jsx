import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import sendFetch from '../../../utils/sendFetch';
import FormButton from '../../formSections/FormButton';
import FormInput from '../../formSections/FormInput';
import FormSelect from '../../formSections/FormSelect';
import FormDate from '../../formSections/FormDate';
import { companies, departments, jobStatuses } from '../../../constants';
import toast from 'react-hot-toast';

export default function UpdateClientJobForm({ currentJob, clients }) {
  const router = useRouter();

  const formRef = useRef(null);

  const [selectedStatus, setSelectedStatus] = useState(currentJob.status);
  const [selectedDepartment, setSelectedDepartment] = useState(
    currentJob.department
  );
  const [selectedCompany, setSelectedCompany] = useState(currentJob.company);
  const [client, setClient] = useState(currentJob.clientId);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formValues = new FormData(formRef.current);

    const formDetails = {
      company: selectedCompany,
      client,
      title: formValues.get('title'),
      status: selectedStatus,
      cost: formValues.get('cost'),
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
      `http://localhost:4000/api/jobs/${currentJob.id}`,
      'PUT',
      formDetails
    );

    if (data) {
      toast('Updated Job successfully');
      router.push('/jobs');
    } else {
      toast(error);
      console.log(error);
    }
  };

  if (!currentJob) {
    return null;
  }

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} className='w-full'>
      <FormSelect
        labelText='Company To Bill From'
        inputName='company'
        options={companies}
        setSelected={setSelectedCompany}
        defaultValue={companies.find(
          (company) => company.name === currentJob.company
        )}
      />
      <FormSelect
        labelText='Client'
        inputName='client'
        options={clients}
        setSelected={setClient}
        defaultValue={clients.find(
          (client) => client.id === currentJob.clientId
        )}
      />
      <FormInput
        labelText='Job Title'
        inputName='title'
        defaultValue={currentJob.title}
      />
      <FormSelect
        labelText='Status'
        inputName='status'
        options={jobStatuses}
        setSelected={setSelectedStatus}
        defaultValue={jobStatuses.find(
          (status) => status.value === currentJob.status
        )}
      />
      <FormInput
        labelText='Cost'
        inputName='cost'
        defaultValue={currentJob.cost}
      />
      <FormSelect
        labelText='Department'
        inputName='department'
        options={departments}
        setSelected={setSelectedDepartment}
        defaultValue={departments.find(
          (department) => department.value === currentJob.department
        )}
      />
      <FormDate
        labelText='Created Date'
        inputName='createdDate'
        defaultValue={currentJob.createdDate}
      />
      <FormDate
        labelText='Completed At'
        inputName='completedDate'
        defaultValue={currentJob.completedDate}
      />
      <FormButton text='Update Job' />
    </form>
  );
}
