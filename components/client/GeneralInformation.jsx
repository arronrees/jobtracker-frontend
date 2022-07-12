export default function GeneralInformation({ client, setShowForm }) {
  return (
    <section className='border-b-2 pb-2 mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <p className='font-bold mb-2 pb-1 border-b-2'>General Information:</p>
        <button
          type='button'
          className='inline-block text-center font-medium bg-orange-600 text-white px-4 py-1 rounded-md transition duration-300 hover:bg-orange-500 focus:ring-2 ring-inbg-orange-600 ring-offset-2 focus:outline-none'
          onClick={() => setShowForm('update-client')}
        >
          Edit Details:
        </button>
      </div>
      <div className='flex justify-between items-center gap-4 mb-4'>
        <p className='font-semibold text-cyan-800'>Client Name:</p>
        <p>{client.name}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800'>Primary Contact Name:</p>
        <p>{client.primaryContactName}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800'>Primary Contact Number:</p>
        <p>{client.primaryContactNumber}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800'>Primary Contact Email:</p>
        <p>{client.primaryContactEmail}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800'>Secondary Contact Number:</p>
        <p>{client.secondaryContactNumber}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-4'>
        <p className='font-semibold text-cyan-800'>Secondary Contact Email:</p>
        <p>{client.secondaryContactEmail}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800 mb-1'>Address Line 1:</p>
        <p>{client.address.addressLine1}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800 mb-1'>Address Line 2:</p>
        <p>{client.address.addressLine2}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800 mb-1'>Town:</p>
        <p>{client.address.town}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800 mb-1'>County:</p>
        <p>{client.address.county}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-1'>
        <p className='font-semibold text-cyan-800 mb-1'>Postcode:</p>
        <p>{client.address.postCode}</p>
      </div>
      <div className='flex justify-between items-center gap-4 mb-4'>
        <p className='font-semibold text-cyan-800 mb-1'>Country:</p>
        <p>{client.address.country}</p>
      </div>
      <div className='mb-1'>
        <p className='font-semibold text-cyan-800 mb-1'>General Notes:</p>
        <p>{client.generalNotes}</p>
      </div>
    </section>
  );
}
