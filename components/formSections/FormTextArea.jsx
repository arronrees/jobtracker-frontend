export default function FormTextArea({ labelText, inputName, defaultValue }) {
  return (
    <div className='mb-2 text-xs'>
      <label htmlFor={inputName} className='block'>
        <span className='text-gray-500 inline-block pb-2'>{labelText}:</span>
        <textarea
          className='block w-full rounded-md border-gray-300 bg-transparent font-bold text-cyan-700 text-xs p-3 h-28 bg-gray-50'
          name={inputName}
          id={inputName}
          defaultValue={defaultValue}
        ></textarea>
      </label>
    </div>
  );
}
