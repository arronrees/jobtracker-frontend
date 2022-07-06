import ClientForm from '../../components/forms/update/UpdateClientForm';
import UpdateCmsForm from '../../components/forms/update/UpdateCmsForm';
import UpdateDatabaseForm from '../../components/forms/update/UpdateDatabaseForm';
import UpdateEmailForm from '../../components/forms/update/UpdateEmailForm';
import UpdateFtpForm from '../../components/forms/update/UpdateFtpForm';
import UpdateOtherAccountForm from '../../components/forms/update/UpdateOtherAccountForm';
import CreateCmsForm from '../../components/forms/create/CreateCmsForm';
import CreateDatabaseForm from '../../components/forms/create/CreateDatabaseForm';
import CreateEmailForm from '../../components/forms/create/CreateEmailForm';
import CreateFtpForm from '../../components/forms/create/CreateFtpForm';
import CreateOtherAccountForm from '../../components/forms/create/CreateOtherAccountForm';

export default function Client({ client }) {
  console.log(client);

  return (
    <div className='p-8 grid grid-cols-2'>
      <section>
        <h1 className='mb-8 font-bold'>{client.name}</h1>

        <ClientForm client={client} />

        <h2 className='mb-4 font-bold'>FTP Details</h2>
        {client.ftpDetails.map((detail) => (
          <UpdateFtpForm key={detail.id} detail={detail} />
        ))}

        <h2 className='mb-4 font-bold'>Email Details</h2>
        {client.emailDetails.map((detail) => (
          <UpdateEmailForm key={detail.id} detail={detail} />
        ))}

        <h2 className='mb-4 font-bold'>Database Details</h2>
        {client.databaseDetails.map((detail) => (
          <UpdateDatabaseForm key={detail.id} detail={detail} />
        ))}

        <h2 className='mb-4 font-bold'>CMS Details</h2>
        {client.cmsDetails.map((detail) => (
          <UpdateCmsForm key={detail.id} detail={detail} />
        ))}

        <h2 className='mb-4 font-bold'>Other Account Details</h2>
        {client.otherDetails.map((detail) => (
          <UpdateOtherAccountForm key={detail.id} detail={detail} />
        ))}
      </section>
      <section>
        <h2 className='mb-8 font-bold'>Create FTP Details</h2>
        <CreateFtpForm client={client} />

        <h2 className='mb-8 font-bold'>Create Email Details</h2>
        <CreateEmailForm client={client} />

        <h2 className='mb-8 font-bold'>Create CMS Details</h2>
        <CreateCmsForm client={client} />

        <h2 className='mb-8 font-bold'>Create Database Details</h2>
        <CreateDatabaseForm client={client} />

        <h2 className='mb-8 font-bold'>Create Other Account Details</h2>
        <CreateOtherAccountForm client={client} />
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
