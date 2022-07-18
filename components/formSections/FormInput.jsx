export default function FormInput({ labelText, inputName, defaultValue }) {
  return (
    <div className='mb-2 text-xs'>
      <label
        htmlFor={inputName}
        className='grid grid-cols-3 items-center gap-4'
      >
        <span className='text-gray-500 inline-block'>{labelText}:</span>
        <input
          className='block w-full rounded-md border-gray-300 bg-transparent font-medium text-cyan-700 p-3 leading-none col-span-2 bg-gray-50'
          type='text'
          name={inputName}
          id={inputName}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}
