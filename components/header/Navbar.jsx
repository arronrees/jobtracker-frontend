import Link from 'next/link';
import { useEffect, useState } from 'react';
import ClientSearch from './ClientSearch';

export default function Navbar() {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/clients/search')
      .then((res) => res.json())
      .then((data) => setClients(data.data))
      .catch((err) => console.log('Error: ', err));
  }, []);

  return (
    <nav className='flex items-center justify-between p-4 border-b-2'>
      <ul className='flex items-center justify-between gap-6 text-lg'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/clients'>
            <a>All Clients</a>
          </Link>
        </li>
        <li>
          <Link href='/clients/create'>
            <a>Create New Client</a>
          </Link>
        </li>
        <li>
          <Link href='/jobs'>
            <a>Jobs</a>
          </Link>
        </li>
      </ul>
      {clients && <ClientSearch clients={clients} />}
    </nav>
  );
}
