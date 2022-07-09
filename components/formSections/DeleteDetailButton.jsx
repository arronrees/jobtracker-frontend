import { useRouter } from 'next/router';

export default function DeleteDetailButton({ text, detail, id }) {
  const router = useRouter();

  const handleButtonClick = async () => {
    const confirm = window.confirm('Are you sure');

    if (confirm) {
      const res = await fetch(
        `http://localhost:4000/api/clients/${detail}-details/${id}`,
        {
          method: 'DELETE',
        }
      );

      const data = await res.json();

      if (data) {
        router.reload();
      }

      console.log(data);
    }
  };

  return (
    <button
      type='button'
      className='inline-block text-center font-medium bg-red-600 text-white px-4 py-2 mt-2 rounded-md transition duration-300 hover:bg-red-500 focus:ring-2 ring-inbg-red-600 ring-offset-2 focus:outline-none ring-red-400'
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}
