export default function FormButton({ text }) {
  return (
    <button
      type='submit'
      className='inline-block text-center font-medium bg-indigo-600 text-white px-4 py-2 mt-2 rounded-md transition duration-300 hover:bg-indigo-500 focus:ring-2 ring-inbg-indigo-600 ring-offset-2 focus:outline-none'
    >
      {text}
    </button>
  );
}
