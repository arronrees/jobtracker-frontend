import { useState } from 'react';
import PageJobTable from '../../components/jobs/PageJobTable';
import FilterTableHeading from '../../components/jobs/FilterTableHeading';

export default function Jobs({ allJobs, clients }) {
  const [jobs, setJobs] = useState(allJobs);

  if (!jobs) {
    return null;
  }

  return (
    <div className='p-6'>
      <FilterTableHeading
        clients={clients}
        allJobs={allJobs}
        setJobs={setJobs}
      />

      <PageJobTable jobs={jobs} setJobs={setJobs} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/api/jobs');
  const data = await res.json();

  return {
    props: {
      allJobs: data.data.allJobs,
      clients: data.data.allClients,
    },
  };
}
