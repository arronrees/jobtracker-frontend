import UpdateClientJobForm from '../../components/forms/update/UpdateClientJobForm';

export default function Job({ job, clients }) {
  return (
    <div className='p-6'>
      <UpdateClientJobForm currentJob={job} clients={clients} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/jobs/${id}`);
  const data = await res.json();

  const clients =
    data.data.clients.length > 0
      ? data.data.clients.map((client) => ({
          ...client,
          label: client.name,
          value: client.id,
        }))
      : null;

  return { props: { job: data.data.job, clients } };
}
