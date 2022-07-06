import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
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
