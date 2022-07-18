import { useEffect, useState } from 'react';
import FilterClientList from './FilterClientList';
import FilterStatusList from './FilterStatusList';
import FilterDepartmentList from './FilterDepartmentList';
import FilterCompanyList from './FilterCompanyList';
import FilterDateList from './FilterDateList';
import { companies, departments, jobStatuses, years } from '../../constants';

export default function FilterTableHeading({
  clients,
  allJobs,
  setJobs,
  jobs,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    if (selectedFilter && selectedFilter.filter) {
      if (selectedFilter.filter === 'client') {
        setJobs(allJobs.filter((job) => job.client.id === selectedFilter.id));
      } else if (selectedFilter.filter === 'status') {
        setJobs(allJobs.filter((job) => job.status === selectedFilter.name));
      } else if (selectedFilter.filter === 'department') {
        setJobs(
          allJobs.filter((job) => job.department === selectedFilter.name)
        );
      } else if (selectedFilter.filter === 'company') {
        setJobs(allJobs.filter((job) => job.company === selectedFilter.name));
      } else if (selectedFilter.filter === 'createdDate') {
        setJobs(
          allJobs.filter(
            (job) =>
              new Date(job.createdDate).getFullYear() ===
              new Date(selectedFilter.value).getFullYear()
          )
        );
      }
    } else {
      setJobs(allJobs);
    }
  }, [selectedFilter, allJobs, setJobs]);

  return (
    <section className='mb-8 flex items-end gap-8'>
      <div>
        <FilterCompanyList
          options={companies}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      <div>
        <FilterClientList
          options={clients}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      <div>
        <FilterStatusList
          options={jobStatuses}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      <div>
        <FilterDepartmentList
          options={departments}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
      <div>
        <FilterDateList options={years} setSelectedFilter={setSelectedFilter} />
      </div>
      <div className='ml-auto'>
        <button
          type='submit'
          className='inline-block text-center font-medium bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-red-400 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none ring-red-600'
          onClick={() => setSelectedFilter(null)}
        >
          Reset filters
        </button>
      </div>
    </section>
  );
}
