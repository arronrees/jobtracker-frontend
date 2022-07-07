export default function FormTextArea({ labelText, inputName, defaultValue }) {
  return (
    <div className='mb-2 text-xs'>
      <label htmlFor={inputName} className='block'>
        <span className='text-gray-500 inline-block pb-1'>{labelText}</span>
        <textarea
          className='block w-full rounded-md border-gray-400 bg-transparent font-bold text-cyan-700 text-xs p-2 h-28'
          name={inputName}
          id={inputName}
          defaultValue={defaultValue}
        ></textarea>
      </label>
    </div>
  );
}
