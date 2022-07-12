import { useState } from 'react';
import Link from 'next/link';
import GeneralInformation from '../../components/client/GeneralInformation';
import DetailSelection from '../../components/client/DetailSelection';
import DetailSelectionForms from '../../components/client/DetailSelectionForms';
import FormsToShow from '../../components/client/FormsToShow';

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

        <p className='font-bold border-b-2 pb-1 mb-2 mt-10 w-max'>
          Client Jobs
        </p>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='py-3 px-6'>
                Title
              </th>
              <th scope='col' className='py-3 px-6'>
                User
              </th>
              <th scope='col' className='py-3 px-6'>
                Amount
              </th>
              <th scope='col' className='py-3 px-6'>
                Status
              </th>
              <th scope='col' className='py-3 px-6'></th>
            </tr>
          </thead>
          <tbody>
            {client.jobs &&
              client.jobs.map((job) => (
                <tr
                  key={job.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {job.title}
                  </th>
                  <td className='py-4 px-6'></td>
                  <td className='py-4 px-6'>£{job.amount}</td>
                  <td className='py-4 px-6 text-center'>{job.status}</td>
                  <td className='py-4 px-6 text-right'>
                    <Link href='/'>
                      <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                        Edit
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          type='button'
          className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-4'
          onClick={() => setShowForm('create-job')}
        >
          Create New Job
        </button>
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
