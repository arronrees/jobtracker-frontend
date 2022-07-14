export default function FormDate({ labelText, inputName, defaultValue }) {
  return (
    <div className='mb-2 text-xs'>
      <label
        htmlFor={inputName}
        className='grid grid-cols-3 items-center gap-4'
      >
        <span className='text-gray-500 inline-block'>{labelText}:</span>
        <input
          className='block w-full rounded-md border-gray-300 bg-transparent font-bold text-cyan-700 p-3 leading-none text-xs col-span-2 bg-gray-50'
          type='date'
          name={inputName}
          id={inputName}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}
