export default function FormCheckbox({ labelText, inputName, children }) {
  return (
    <div className='mb-2 text-xs'>
      <label
        htmlFor={inputName}
        className='grid grid-cols-3 items-center gap-4'
      >
        <span className='text-gray-500 inline-block'>{labelText}:</span>
        <select
          name={inputName}
          id={inputName}
          className='block w-full rounded-md border-gray-400 bg-transparent font-bold text-cyan-700 p-2 leading-none text-xs col-span-2'
        >
          {children}
        </select>
      </label>
    </div>
  );
}
