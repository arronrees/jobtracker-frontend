import CreateClientForm from '../../components/forms/create/CreateClientForm';

export default function Create() {
  return (
    <div className='p-8'>
      <h1 className='mb-8 font-bold'>Create new client</h1>

      <CreateClientForm />
    </div>
  );
}
