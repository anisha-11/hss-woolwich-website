import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center">
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/gallery'>
          <a>Gallery</a>
        </Link>
      </li>
      <li>
        <Link href='/calendar'>
          <a>Calendar</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;