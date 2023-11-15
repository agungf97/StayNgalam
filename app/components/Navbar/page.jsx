import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Navbar = async () => {
  const { userId } = auth();

  return (
    <nav className='fixed top-0 right-0 left-0 z-10 flex items-center justify-between md:px-20 px-5 py-3 bg-slate-100 shadow-lg'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='md:text-xl text-sm font-bold bg-gradient-to-r from-fuchsia-600 hover:from-fuchsia-500 to-cyan-600 hover:to-cyan-500 bg-clip-text text-transparent duration-300'>
            SayNgalam
          </div>
        </Link>
      </div>
      <div className='flex items-center'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='md:text-base text-xs font-semibold px-3 py-2 border-2 border-fuchsia-200 hover:bg-gradient-to-r from-fuchsia-200 to-cyan-200 duration-300 rounded-lg '
            >
              SignIn or SignUp
            </Link>
          </>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar