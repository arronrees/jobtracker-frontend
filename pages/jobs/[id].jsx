import UpdateClientJobForm from '../../components/forms/update/UpdateClientJobForm';

export default function Job({ job }) {
  return (
    <div className='p-6'>
      <UpdateClientJobForm currentJob={job} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/jobs/${id}`);
  const data = await res.json();

  return { props: { job: data.data } };
}
