import { useEffect, useState } from 'react';
import FilterClientList from './FilterClientList';
import FilterStatusList from './FilterStatusList';
import FilterDepartmentList from './FilterDepartmentList';
import { departments, jobStatuses } from '../../constants';

export default function FilterTableHeading({ clients, allJobs, setJobs }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    if (selectedFilter) {
      if (selectedFilter.filter === 'client') {
        setJobs(allJobs.filter((job) => job.client.id === selectedFilter.id));
      } else if (selectedFilter.filter === 'status') {
        setJobs(allJobs.filter((job) => job.status === selectedFilter.name));
      } else if (selectedFilter.filter === 'department') {
        setJobs(
          allJobs.filter((job) => job.department === selectedFilter.name)
        );
      }
    } else {
      setJobs(allJobs);
    }
  }, [selectedFilter, allJobs, setJobs]);

  return (
    <section className='mb-8 flex items-center gap-8'>
      <div>
        <FilterClientList
          options={clients}
          setSelectedFilter={setSelectedFilter}
        />
        <button
          type='button'
          className='font-medium text-indigo-600 hover:border-indigo-500 border-b border-transparent transition duration-200'
          onClick={() => setSelectedFilter('')}
        >
          Reset Client Filter
        </button>
      </div>
      <div>
        <FilterStatusList
          options={jobStatuses}
          setSelectedFilter={setSelectedFilter}
        />
        <button
          type='button'
          className='font-medium text-indigo-600 hover:border-indigo-500 border-b border-transparent transition duration-200'
          onClick={() => setSelectedFilter('')}
        >
          Reset Status Filter
        </button>
      </div>
      <div>
        <FilterDepartmentList
          options={departments}
          setSelectedFilter={setSelectedFilter}
        />
        <button
          type='button'
          className='font-medium text-indigo-600 hover:border-indigo-500 border-b border-transparent transition duration-200'
          onClick={() => setSelectedFilter('')}
        >
          Reset Status Filter
        </button>
      </div>
    </section>
  );
}
