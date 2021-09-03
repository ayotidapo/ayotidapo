import Link from "next/link";
import cx from "classnames";
import classes from "./mq-navbar.module.css";

const MQNavbar = (props) => {
  const { mobNav, setMobNav } = props;
  const links = [
    { title: "Home", link: "" },
    { title: "About", link: "about" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Resume", link: "resume" },
    { title: "Contact", link: "contact" },
  ];
  return (
    <>
      <nav className={cx([classes.navi], { [classes.naviClose]: !mobNav })}>
        <ul className="flx ">
          {links.map((link, i) => (
            <li key={i}>
              <Link href={`/${link.link}`}>
                <a onClick={() => setMobNav(false)}>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default MQNavbar;
