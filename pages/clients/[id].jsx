import ClientForm from '../../components/forms/ClientForm';
import CmsForm from '../../components/forms/CmsForm';
import DatabaseForm from '../../components/forms/DatabaseForm';
import EmailForm from '../../components/forms/EmailForm';
import FtpForm from '../../components/forms/FtpForm';
import OtherAccountForm from '../../components/forms/OtherAccountForm';

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
      {client.emailDetails.map((detail) => (
        <EmailForm key={detail.id} detail={detail} />
      ))}

      <h2 className='mb-4 font-bold'>Database Details</h2>
      {client.databaseDetails.map((detail) => (
        <DatabaseForm key={detail.id} detail={detail} />
      ))}

      <h2 className='mb-4 font-bold'>CMS Details</h2>
      {client.cmsDetails.map((detail) => (
        <CmsForm key={detail.id} detail={detail} />
      ))}

      <h2 className='mb-4 font-bold'>Other Account Details</h2>
      {client.otherDetails.map((detail) => (
        <OtherAccountForm key={detail.id} detail={detail} />
      ))}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/clients/${id}`);
  const data = await res.json();

  return { props: { client: data } };
}
