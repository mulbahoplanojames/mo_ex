import Link from "next/link";

const navLinks = [
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "TV Shows",
    path: "/tv-shows",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-20 py-3 bg-slate-950 text-white fixed top-0 w-full">
        <Link href="/" className="text-3xl font-bold">
          Logo
        </Link>

        <menu>
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className="inline-block px-14 text-lg hover:text-red-600"
            >
              {link.name}
            </Link>
          ))}
        </menu>
      </nav>
    </>
  );
};

export default Navbar;
