import ClientForm from '../../components/forms/ClientForm';
import FtpForm from '../../components/forms/FtpForm';

export default function Client({ client }) {
  console.log(client);

  return (
    <div className='p-8'>
      <h1 className='mb-8 font-bold'>{client.name}</h1>

      <ClientForm client={client} />

      <h2 className='mb-4 font-bold'>FTP Details</h2>
      {client.ftpDetails.map((detail) => (
        <FtpForm key={detail.id} detail={detail} />
      ))}

      <h2 className='mb-4 font-bold'>Email Details</h2>

      <h2 className='mb-4 font-bold'>Database Details</h2>

      <h2 className='mb-4 font-bold'>CMS Details</h2>

      <h2 className='mb-4 font-bold'>Other Account Details</h2>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/clients/${id}`);
  const data = await res.json();

  return { props: { client: data } };
}
