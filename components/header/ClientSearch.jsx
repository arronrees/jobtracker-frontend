import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SelectorIcon, ArrowRightIcon } from '@heroicons/react/solid';

export default function ClientSearch({ clients }) {
  const clientList = clients.map((client) => ({
    id: client.id,
    name: client.name,
  }));

  const [selected, setSelected] = useState(clientList[0]);
  const [query, setQuery] = useState('');

  const allClients =
    query === ''
      ? clientList
      : clientList.filter((client) =>
          client.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className='w-72'>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus-visible:ring-2 '>
            <Combobox.Input
              className='block w-full rounded-md border-indigo-400 border-2 bg-transparent font-bold text-indigo-700 p-2 leading-none text-xs ring-offset-2 '
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <SelectorIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {allClients.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                allClients.map((client) => (
                  <Link href={`/clients/${client.id}`} key={client.id}>
                    <a>
                      <Combobox.Option
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'text-indigo-900'
                          }`
                        }
                        value={client}
                      >
                        {({ selected, active }) => (
                          <span
                            className={`flex items-center justify-between truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {client.name}
                            <ArrowRightIcon width={16} height={16} />
                          </span>
                        )}
                      </Combobox.Option>
                    </a>
                  </Link>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
