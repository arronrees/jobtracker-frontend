import ReactSelect from 'react-select';

export default function FormSelect({
  labelText,
  inputName,
  options,
  defaultValue,
  setSelected,
}) {
  return (
    <div className='mb-2 text-xs'>
      <label
        htmlFor={inputName}
        className='grid grid-cols-3 items-center gap-4'
      >
        <span className='text-gray-500 inline-block'>{labelText}:</span>
        <ReactSelect
          options={options}
          defaultValue={defaultValue}
          className='w-full col-span-2'
          onChange={(e) => setSelected(e.value)}
          instanceId={inputName}
        />
      </label>
    </div>
  );
}
