export default function FormTextArea({ labelText, inputName, defaultValue }) {
  return (
    <div className='mb-4'>
      <label htmlFor={inputName} className='block'>
        <span className='text-gray-500 inline-block pb-1'>{labelText}</span>
        <textarea
          className='block w-full rounded-md border-gray-400 bg-transparent font-bold text-indigo-700'
          name={inputName}
          id={inputName}
          defaultValue={defaultValue}
        ></textarea>
      </label>
    </div>
  );
}
