import Link from 'next/link';

export default function Clients({ clients }) {
  return (
    <div className='p-6'>
      {clients.map((client) => (
        <Link href={`/clients/${client.id}`} key={client.id}>
          <a className='mb-4 block border border-indigo-600 rounded-md p-4 focus:ring-2 ring-bg-light-grey ring-offset-2 focus:outline-none'>
            <h2>{client.name}</h2>
            <p>{client.primaryContactNumber}</p>
            <p>{client.primaryContactEmail}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/api/clients');
  const data = await res.json();

  return { props: { clients: data.data } };
}
