import Link from 'next/link';
import { useState } from 'react';
import { statusColours } from '../../constants';

export default function PageJobTable({ jobs, setJobs }) {
  const [currentSort, setCurrentSort] = useState('');

  const handleSort = (sorter) => {
    setCurrentSort(sorter);

    let toSort = [...jobs];

    if (jobs.length > 1) {
      if (sorter === 'completedDate' || sorter === 'createdAt') {
        if (currentSort === sorter) {
          toSort = toSort.sort(
            (a, b) => new Date(b[sorter]) - new Date(a[sorter])
          );
          setCurrentSort('');
        } else {
          toSort = toSort.sort(
            (a, b) => new Date(a[sorter]) - new Date(b[sorter])
          );
        }
      } else if (typeof jobs[0][sorter] === 'number') {
        if (currentSort === sorter) {
          toSort = toSort.sort((a, b) => b[sorter] - a[sorter]);
          setCurrentSort('');
        } else {
          toSort = toSort.sort((a, b) => a[sorter] - b[sorter]);
        }
      } else if (typeof jobs[0][sorter] === 'string') {
        if (currentSort === sorter) {
          toSort = toSort.sort((a, b) =>
            ('' + b[sorter]).localeCompare(a[sorter])
          );

          setCurrentSort('');
        } else {
          toSort = toSort.sort((a, b) =>
            ('' + a[sorter]).localeCompare(b[sorter])
          );
        }
      }

      setJobs(toSort);
    }

    return;
  };

  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-y-auto'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('company')}
          >
            Company
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('title')}
          >
            Title
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('user')}
          >
            User
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('client')}
          >
            Client
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('cost')}
          >
            Cost
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('status')}
          >
            Status
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('department')}
          >
            Department
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('createdDate')}
          >
            Created Date
          </th>
          <th
            scope='col'
            className='cursor-pointer py-3 px-4'
            onClick={() => handleSort('completedDate')}
          >
            Completed Date
          </th>
          <th scope='col' className='py-3 px-4'></th>
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
                className='p-4 text-gray-900 whitespace-nowrap font-medium '
              >
                {job.company}
              </th>
              <th
                scope='row'
                className='p-4 text-gray-900 whitespace-nowrap font-medium '
              >
                {job.title}
              </th>
              <td className='p-4'></td>
              <td className='p-4'>
                <Link href={`/clients/${job.client.id}`}>
                  <a className='hover:text-indigo-400 hover:border-indigo-400 border-b border-transparent transition duration-200 cursor-pointer'>
                    {job.client.name}
                  </a>
                </Link>
              </td>
              <td className='p-4'>£{job.cost}</td>
              <td
                className={`p-4 ${statusColours
                  .map((colour) =>
                    job.status === colour.status ? colour.colour : ''
                  )
                  .join('')}`}
              >
                {job.status}
              </td>
              <td className='p-4'>{job.department}</td>
              <td className='p-4'>{job.createdDate}</td>
              <td className='p-4'>{job.completedDate}</td>
              <td className='p-4 text-right'>
                <Link href={`/jobs/${job.id}`}>
                  <a className='font-medium text-indigo-600 hover:border-indigo-500 border-b border-transparent transition duration-200'>
                    View
                  </a>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
