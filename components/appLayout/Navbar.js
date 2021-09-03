import Link from "next/link";

import classes from "./navbar.module.css";

const Navbar = () => {
  const links = [
    { title: "Home", link: "" },
    { title: "About", link: "about" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Resume", link: "resume" },
    { title: "Contact", link: "contact" },
  ];
  return (
    <div>
      <nav className={classes.navi}>
        <ul className="flx ">
          {links.map((link, i) => (
            <li key={i}>
              <Link href={`/${link.link}`}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
