export default function ClientFormWrapper({
  children,
  setShowForm,
  titleText,
}) {
  return (
    <div
      id='closeForm'
      className='fixed backdrop-blur-md bg-cyan-900 bg-opacity-30 w-screen h-screen top-0 left-0 p-16 flex items-center justify-center'
      onClick={({ target }) => {
        target.id === 'closeForm' && setShowForm(null);
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='absolute top-8 right-8 h-16 w-16 cursor-pointer'
        viewBox='0 0 16 16'
        onClick={() => setShowForm(null)}
      >
        <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
      </svg>
      <div className='h-auto max-h-full max-w-5xl w-10/12 p-12 bg-white rounded-lg overflow-y-auto flex flex-col items-center justify-center'>
        <p className='font-bold text-lg mb-8 pb-1 border-b-2'>{titleText}</p>
        {children}
      </div>
    </div>
  );
}
