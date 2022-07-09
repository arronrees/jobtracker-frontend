import Navbar from './header/Navbar';

export default function Layout({ children }) {
  return (
    <div className='text-cyan-900 text-sm'>
      <Navbar />
      {children}
    </div>
  );
}
