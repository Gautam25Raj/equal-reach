import Link from 'next/link';

const FooterNav = () => {
  return (
    <nav className="flex mt-5 md:mx-5">
      <section className="mr-14">
        <h3 className="text-gray-600 font-semibold uppercase mb-6">Menu</h3>
        <ul>
          <li className="text-gray-600 mb-2">
            <Link href="/">Home</Link>
          </li>

          <li className="text-gray-600 mb-2">
            <Link href="/about">About</Link>
          </li>

          <li className="text-gray-600 mb-2">
            <Link href="/feed">Feeds</Link>
          </li>

          <li className="text-gray-600 mb-2">
            <Link href="/feed/notification">Notification</Link>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-gray-600 font-semibold uppercase mb-6">
          Contact us
        </h3>
        <ul>
          <li className="text-gray-600 mb-2">
            <Link href="/">Contact us</Link>
          </li>

          <li className="text-gray-600 mb-2">
            <Link href="/">FAQ</Link>
          </li>

          <li className="text-gray-600 mb-2">
            <Link href="/">Help</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
export default FooterNav;
