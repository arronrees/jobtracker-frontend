import Navbar from './header/Navbar';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <div className='text-cyan-900 text-sm'>
      <Navbar />
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      {children}
    </div>
  );
}
