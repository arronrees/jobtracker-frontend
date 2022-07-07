import UpdateClientForm from '../../components/forms/update/UpdateClientForm';
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
import { useState } from 'react';

export default function Client({ client }) {
  console.log(client);

  const [showForm, setShowForm] = useState(null);

  const [currentDetailSelection, setCurrentDetailSelection] = useState('ftp');

  return (
    <div className='p-8 grid grid-cols-12 gap-16'>
      <section className='col-span-4'>
        <section className='border-b-2 pb-2 mb-8'>
          <div className='flex items-center justify-between mb-4'>
            <p className='font-bold mb-2 pb-1 border-b-2'>
              General Information:
            </p>
            <button
              type='button'
              className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none'
              onClick={() => setShowForm('update-client')}
            >
              Edit Details:
            </button>
          </div>
          <div className='flex justify-between items-center gap-4 mb-1'>
            <p className='font-semibold text-cyan-800'>Client Name:</p>
            <p>{client.name}</p>
          </div>
          <div className='flex justify-between items-center gap-4 mb-1'>
            <p className='font-semibold text-cyan-800'>
              Primary Contact Number:
            </p>
            <p>{client.primaryContactNumber}</p>
          </div>
          <div className='flex justify-between items-center gap-4 mb-1'>
            <p className='font-semibold text-cyan-800'>
              Primary Contact Email:
            </p>
            <p>{client.primaryContactEmail}</p>
          </div>
          <div className='flex justify-between items-center gap-4 mb-1'>
            <p className='font-semibold text-cyan-800'>
              Secondary Contact Number:
            </p>
            <p>{client.secondaryContactNumber}</p>
          </div>
          <div className='flex justify-between items-center gap-4 mb-1'>
            <p className='font-semibold text-cyan-800'>
              Secondary Contact Email:
            </p>
            <p>{client.secondaryContactEmail}</p>
          </div>
          <div className='mb-1'>
            <p className='font-semibold text-cyan-800 mb-1'>General Notes:</p>
            <p>{client.generalNotes}</p>
          </div>
        </section>
      </section>
      <section className='col-span-8'>
        <div className='grid grid-cols-5 gap-4'>
          <button
            type='button'
            className={`font-semibold border-b-2 transition duration-300 hover:border-orange-500 focus:border-orange-500 p-4 ${
              currentDetailSelection === 'ftp' ? 'border-orange-500' : ''
            }`}
            onClick={() => setCurrentDetailSelection('ftp')}
          >
            FTP Details
          </button>
          <button
            type='button'
            className={`font-semibold border-b-2 transition duration-300 hover:border-orange-500 focus:border-orange-500 p-4 ${
              currentDetailSelection === 'database' ? 'border-orange-500' : ''
            }`}
            onClick={() => setCurrentDetailSelection('database')}
          >
            Database Details
          </button>
          <button
            type='button'
            className={`font-semibold border-b-2 transition duration-300 hover:border-orange-500 focus:border-orange-500 p-4 ${
              currentDetailSelection === 'cms' ? 'border-orange-500' : ''
            }`}
            onClick={() => setCurrentDetailSelection('cms')}
          >
            CMS Details
          </button>
          <button
            type='button'
            className={`font-semibold border-b-2 transition duration-300 hover:border-orange-500 focus:border-orange-500 p-4 ${
              currentDetailSelection === 'email' ? 'border-orange-500' : ''
            }`}
            onClick={() => setCurrentDetailSelection('email')}
          >
            Email Details
          </button>
          <button
            type='button'
            className={`font-semibold border-b-2 transition duration-300 hover:border-orange-500 focus:border-orange-500 p-4 ${
              currentDetailSelection === 'other' ? 'border-orange-500' : ''
            }`}
            onClick={() => setCurrentDetailSelection('other')}
          >
            Other Details
          </button>
        </div>

        {currentDetailSelection === 'ftp' && (
          <>
            {client.ftpDetails.map((detail) => (
              <UpdateFtpForm key={detail.id} detail={detail} />
            ))}
            <button
              type='button'
              className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-6'
              onClick={() => setShowForm('create-ftp')}
            >
              Create New Ftp Details
            </button>
          </>
        )}

        {currentDetailSelection === 'database' && (
          <>
            {client.databaseDetails.map((detail) => (
              <UpdateDatabaseForm key={detail.id} detail={detail} />
            ))}
            <button
              type='button'
              className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-6'
              onClick={() => setShowForm('create-database')}
            >
              Create New Database Details
            </button>
          </>
        )}

        {currentDetailSelection === 'cms' && (
          <>
            {client.cmsDetails.map((detail) => (
              <UpdateCmsForm key={detail.id} detail={detail} />
            ))}
            <button
              type='button'
              className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-6'
              onClick={() => setShowForm('create-cms')}
            >
              Create New CMS Details
            </button>
          </>
        )}

        {currentDetailSelection === 'email' && (
          <>
            {client.emailDetails.map((detail) => (
              <UpdateEmailForm key={detail.id} detail={detail} />
            ))}
            <button
              type='button'
              className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-6'
              onClick={() => setShowForm('create-email')}
            >
              Create New Email Details
            </button>
          </>
        )}

        {currentDetailSelection === 'other' && (
          <>
            {client.otherDetails.map((detail) => (
              <UpdateOtherAccountForm key={detail.id} detail={detail} />
            ))}
            <button
              type='button'
              className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-6'
              onClick={() => setShowForm('create-other')}
            >
              Create New Other Account Details
            </button>
          </>
        )}

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
      </section>
    </div>
  );
}

export function ClientFormWrapper({ children, setShowForm, titleText }) {
  return (
    <div
      id='closeForm'
      className='fixed backdrop-blur-md bg-cyan-900 bg-opacity-30 w-screen h-screen top-0 left-0 p-16 flex items-center justify-center'
      onClick={({ target }) => {
        target.id === 'closeForm' && setShowForm(null);
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='absolute top-8 right-8 h-16 w-16 cursor-pointer'
        viewBox='0 0 16 16'
        onClick={() => setShowForm(null)}
      >
        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
      </svg>
      <div className='h-auto max-h-full w-10/12 p-12 bg-white rounded-lg overflow-y-auto flex flex-col items-center justify-center'>
        <p className='font-bold text-lg mb-8 pb-1 border-b-2'>{titleText}</p>
        {children}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/api/clients/${id}`);
  const data = await res.json();

  return { props: { client: data } };
}
