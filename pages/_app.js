import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div className='text-cyan-900 text-sm'>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/clients/create'>
        <a>Create</a>
      </Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
