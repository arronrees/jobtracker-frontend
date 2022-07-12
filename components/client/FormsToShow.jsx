import ClientFormWrapper from '../client/ClientFormWrapper';
import UpdateClientForm from '../forms/update/UpdateClientForm';
import CreateDatabaseForm from '../forms/create/CreateDatabaseForm';
import CreateEmailForm from '../forms/create/CreateEmailForm';
import CreateFtpForm from '../forms/create/CreateFtpForm';
import CreateOtherAccountForm from '../forms/create/CreateOtherAccountForm';
import CreateCmsForm from '../forms/create/CreateCmsForm';
import CreateClientJobForm from '../forms/create/CreateClientJobForm';

export default function FormsToShow({ client, setShowForm, showForm }) {
  return (
    <>
      {showForm === 'update-client' && (
        <ClientFormWrapper
          titleText={`Update ${client.name} details`}
          setShowForm={setShowForm}
        >
          <UpdateClientForm client={client} />
        </ClientFormWrapper>
      )}

      {showForm === 'create-ftp' && (
        <ClientFormWrapper
          titleText={`Create new FTP details for ${client.name}`}
          setShowForm={setShowForm}
        >
          <CreateFtpForm client={client} />
        </ClientFormWrapper>
      )}
      {showForm === 'create-database' && (
        <ClientFormWrapper
          titleText={`Create new database details for ${client.name}`}
          setShowForm={setShowForm}
        >
          <CreateDatabaseForm client={client} />
        </ClientFormWrapper>
      )}
      {showForm === 'create-cms' && (
        <ClientFormWrapper
          titleText={`Create new CMS details for ${client.name}`}
          setShowForm={setShowForm}
        >
          <CreateCmsForm client={client} />
        </ClientFormWrapper>
      )}
      {showForm === 'create-email' && (
        <ClientFormWrapper
          titleText={`Create new email details for ${client.name}`}
          setShowForm={setShowForm}
        >
          <CreateEmailForm client={client} />
        </ClientFormWrapper>
      )}
      {showForm === 'create-other' && (
        <ClientFormWrapper
          titleText={`Create new account details for ${client.name}`}
          setShowForm={setShowForm}
        >
          <CreateOtherAccountForm client={client} />
        </ClientFormWrapper>
      )}
      {showForm === 'create-job' && (
        <ClientFormWrapper
          titleText={`Create new Job for ${client.name}`}
          setShowForm={setShowForm}
        >
          <CreateClientJobForm client={client} />
        </ClientFormWrapper>
      )}
    </>
  );
}
