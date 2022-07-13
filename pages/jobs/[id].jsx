import Link from 'next/link';

export default function Job({ job }) {
  return (
    <div className='p-6'>
      <p>{job.title}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/jobs/${id}`);
  const data = await res.json();

  return { props: { job: data.data } };
}
