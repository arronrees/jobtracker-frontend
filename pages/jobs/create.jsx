import CreateClientJobForm from '../../components/forms/create/CreateClientJobForm';
import { useState, useEffect } from 'react';

export default function CreateJob({}) {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/clients/search')
      .then((res) => res.json())
      .then((data) =>
        setClients(
          data.data.map((client) => ({
            ...client,
            label: client.name,
            value: client.id,
          }))
        )
      )
      .catch((err) => console.log('Error: ', err));
  }, []);

  if (!clients) {
    return null;
  }

  return (
    <div className='p-6'>
      <CreateClientJobForm clients={clients} />
    </div>
  );
}
