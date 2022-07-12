import { useState } from 'react';
import GeneralInformation from '../../components/client/GeneralInformation';
import DetailSelection from '../../components/client/DetailSelection';
import DetailSelectionForms from '../../components/client/DetailSelectionForms';
import FormsToShow from '../../components/client/FormsToShow';
import CreateNewClientJob from '../../components/forms/create/CreateNewClientJob';

export default function Client({ client }) {
  const [showForm, setShowForm] = useState(null);

  const [currentDetailSelection, setCurrentDetailSelection] = useState('ftp');

  return (
    <div className='p-8 grid grid-cols-12 gap-16'>
      <section className='col-span-4'>
        <GeneralInformation client={client} setShowForm={setShowForm} />
      </section>
      <section className='col-span-8'>
        <DetailSelection
          currentDetailSelection={currentDetailSelection}
          setCurrentDetailSelection={setCurrentDetailSelection}
        />

        <DetailSelectionForms
          currentDetailSelection={currentDetailSelection}
          client={client}
          setShowForm={setShowForm}
        />

        <FormsToShow
          client={client}
          setShowForm={setShowForm}
          showForm={showForm}
        />

        <div>
          {client.jobs &&
            client.jobs.map((job) => (
              <div key={job.id}>
                <p>Title: {job.title}</p>
                <p>Completed: {job.completed ? 'True' : 'False'}</p>
              </div>
            ))}
        </div>

        <div>
          <p>Create new job</p>
          <CreateNewClientJob client={client} />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/clients/${id}`);
  const data = await res.json();

  return { props: { client: data } };
}
