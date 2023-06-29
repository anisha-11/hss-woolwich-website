import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 left-0 bottom-50 bg-gray-700 py-10 mb-9 flex justify-between dark:bg-teal-600">
      <h1 className='text-xl text-black font-bold font-burtons ml-8 tracking-wider'>Woolwich Pannabai Shakha</h1>
      <ul className="flex items-center">
      <li>
        <Link href='/'>
          <a className="flex place-items-center bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/">Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/">About</a>
        </Link>
      </li>
      <li>
        <Link href='/gallery'>
          <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/">Gallery</a>
        </Link>
      </li>
      <li>
        <Link href='/calendar'>
          <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-4" href="/">Calendar</a>
        </Link>
      </li>
      <li>
        <Link href='/contact-us'>
          <a className="bg-teal-600 hover:bg-teal-700 text-white dark:bg-orange-200 dark:hover:bg-orange-300 dark:text-black px-4 py-2 rounded-md ml-0 mr-72" href="/">Contact Us</a>
        </Link>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;