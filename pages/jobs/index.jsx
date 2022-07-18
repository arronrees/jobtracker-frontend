import { useState } from 'react';
import PageJobTable from '../../components/jobs/PageJobTable';
import FilterTableHeading from '../../components/jobs/FilterTableHeading';
import Link from 'next/link';

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
        jobs={jobs}
      />

      <div className='mb-8 w-80'>
        <input
          type='text'
          name='searchJobs'
          placeholder='Search jobs...'
          className='block w-full rounded-md border-gray-300 bg-transparent font-medium p-3 leading-none col-span-2 bg-gray-50'
          onChange={({ target }) => {
            const query = target.value;

            if (query !== '') {
              setJobs(
                allJobs.filter(
                  (job) =>
                    job.title
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(query.toLowerCase().replace(/\s+/g, '')) ||
                    job.client.name
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(query.toLowerCase().replace(/\s+/g, ''))
                )
              );
            } else {
              setJobs(allJobs);
            }
          }}
        />
      </div>

      <PageJobTable jobs={jobs} setJobs={setJobs} />

      <Link href='/jobs/create'>
        <a className='inline-block text-center font-medium bg-indigo-600 text-white px-4 py-2 mt-8 rounded-md transition duration-300 hover:bg-indigo-500 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none'>
          Create new job
        </a>
      </Link>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/api/jobs');
  const data = await res.json();

  const allJobs = data.data.allJobs.length > 0 ? data.data.allJobs : null;
  const clients = data.data.allClients.length > 0 ? data.data.allClients : null;

  return {
    props: {
      allJobs,
      clients,
    },
  };
}
