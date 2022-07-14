export default function FormCheckbox({ labelText, inputName, defaultValue }) {
  if (defaultValue) {
    return (
      <div className='mb-2 text-xs'>
        <label
          htmlFor={inputName}
          className='grid grid-cols-3 items-center gap-4'
        >
          <span className='text-gray-500 inline-block'>{labelText}:</span>
          <input
            className='block rounded-md border-gray-300 bg-transparent font-bold text-cyan-700 p-3 leading-none text-xs col-span-2 ml-auto bg-gray-50'
            type='checkbox'
            name={inputName}
            id={inputName}
            value={true}
            defaultChecked
          />
        </label>
      </div>
    );
  } else {
    return (
      <div className='mb-2 text-xs'>
        <label
          htmlFor={inputName}
          className='grid grid-cols-3 items-center gap-4'
        >
          <span className='text-gray-500 inline-block'>{labelText}:</span>
          <input
            className='block rounded-md border-gray-300 bg-transparent font-bold text-cyan-700 p-3 leading-none text-xs col-span-2 ml-auto bg-gray-50'
            type='checkbox'
            name={inputName}
            id={inputName}
            value={true}
          />
        </label>
      </div>
    );
  }
}
