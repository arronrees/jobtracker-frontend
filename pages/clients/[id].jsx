import { useState } from 'react';
import GeneralInformation from '../../components/client/GeneralInformation';
import DetailSelection from '../../components/client/DetailSelection';
import DetailSelectionForms from '../../components/client/DetailSelectionForms';
import FormsToShow from '../../components/client/FormsToShow';
import JobsTable from '../../components/client/JobsTable';
import Link from 'next/link';

export default function Client({ client }) {
  const [showForm, setShowForm] = useState(null);

  const [currentDetailSelection, setCurrentDetailSelection] = useState('ftp');

  return (
    <div className='p-8 md:grid md:grid-cols-12 gap-16'>
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

        <JobsTable
          client={client}
          setShowForm={setShowForm}
          showForm={showForm}
        />

        <Link href='/jobs/create'>
          <a className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-4'>
            Create New Job
          </a>
        </Link>
      </section>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/clients/${id}`);
  const data = await res.json();

  return { props: { client: data.data } };
}
