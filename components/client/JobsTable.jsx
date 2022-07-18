import { useState } from 'react';
import Link from 'next/link';
import UpdateClientJobForm from '../forms/update/UpdateClientJobForm';
import ClientFormWrapper from './ClientFormWrapper';

export default function JobsTable({ client, setShowForm, showForm }) {
  const [jobs, setJobs] = useState(client.jobs);
  const [currentJob, setCurrentJob] = useState(null);

  return (
    <>
      <p className='font-bold border-b-2 pb-1 mb-2 mt-10 w-max'>Client Jobs</p>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-auto'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='cursor-pointer py-3 px-6'>
              Title
            </th>
            <th scope='col' className='cursor-pointer py-3 px-6'>
              User
            </th>
            <th scope='col' className='cursor-pointer py-3 px-6'>
              Cost
            </th>
            <th scope='col' className='cursor-pointer py-3 px-6'>
              Status
            </th>
            <th scope='col' className='cursor-pointer py-3 px-6'>
              Department
            </th>
            <th scope='col' className='cursor-pointer py-3 px-6'>
              Created At
            </th>
            <th scope='col' className='py-3 px-6'></th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 &&
            jobs.map((job) => (
              <tr
                key={job.id}
                className='bg-white border-b last-of-type:border-b-2 even:bg-indigo-50'
              >
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap font-medium '
                >
                  <Link href={`/jobs/${job.id}`}>
                    <a className='hover:text-indigo-400 hover:border-indigo-400 border-b border-transparent transition duration-200 cursor-pointer'>
                      {job.title}
                    </a>
                  </Link>
                </th>
                <td className='py-4 px-6'></td>
                <td className='py-4 px-6'>£{job.cost}</td>
                <td className='py-4 px-6'>{job.status}</td>
                <td className='py-4 px-6'>{job.department}</td>
                <td className='py-4 px-6'>{job.createdAt}</td>
                <td className='py-4 px-6 text-right'>
                  <button
                    type='button'
                    className='font-medium text-indigo-600 hover:border-indigo-500 border-b border-transparent transition duration-200'
                    onClick={() => {
                      setCurrentJob(job);
                      setShowForm('update-job');
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {showForm === 'update-job' && (
        <ClientFormWrapper titleText='Update Job' setShowForm={setShowForm}>
          <UpdateClientJobForm client={client} currentJob={currentJob} />
        </ClientFormWrapper>
      )}
    </>
  );
}
