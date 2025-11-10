import { Link } from '@tanstack/react-router';

export default function Navbar() {
  const activeProps = {
    className: 'underline',
  };

  return (
    <nav>
      <ul className={'flex gap-4'}>
        <li>
          <Link to={'/'} className={'text-blue-500'} activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/about'} className={'text-blue-500'} activeProps={activeProps}>
            About
          </Link>
        </li>

        <li>
          <Link to={'/pokemon'} className={'text-blue-500'} activeProps={activeProps}>
            Pokemon
          </Link>
        </li>
      </ul>
    </nav>
  );
}
