import UpdateFtpForm from '../forms/update/UpdateFtpForm';
import UpdateDatabaseForm from '../forms/update/UpdateDatabaseForm';
import UpdateCmsForm from '../forms/update/UpdateCmsForm';
import UpdateEmailForm from '../forms/update/UpdateEmailForm';
import UpdateOtherAccountForm from '../forms/update/UpdateOtherAccountForm';

export default function DetailSelectionForms({
  client,
  currentDetailSelection,
  setShowForm,
}) {
  return (
    <>
      {currentDetailSelection === 'ftp' && (
        <>
          {client.ftpDetails.map((detail) => (
            <UpdateFtpForm key={detail.id} detail={detail} />
          ))}
          <button
            type='button'
            className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-4'
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
            className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-4'
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
            className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-4'
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
            className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-4'
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
            className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none mt-4'
            onClick={() => setShowForm('create-other')}
          >
            Create New Other Account Details
          </button>
        </>
      )}
    </>
  );
}
