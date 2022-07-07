export default function FormInput({ labelText, inputName, defaultValue }) {
  return (
    <div className='mb-2 text-xs'>
      <label htmlFor={inputName} className='block'>
        <span className='text-gray-500 inline-block pb-1'>{labelText}</span>
        <input
          className='block w-full rounded-md border-gray-400 bg-transparent font-bold text-cyan-700 p-2 leading-none text-xs'
          type='text'
          name={inputName}
          id={inputName}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}
