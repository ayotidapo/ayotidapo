import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Icon from "../icon";
import classes from "./applayout.module.css";
import Navbar from "./Navbar";
import MQNavbar from "./MqNavbar";

const AppLayout = (props) => {
  const [mobNav, setMobNav] = useState(false);
  return (
    <>
      <Head>
        <title>Oladapo Oti</title>
        <meta
          name="description"
          content="Oladapo Ayodeji Oti , ayotidapo software engineer React developer "
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="app__container">
        <header className={classes.header}>
          <h2 className={classes.brand}>
            {" "}
            <Link href="/">&lt;AyotiDapo/&gt;</Link>
          </h2>
          <div className={classes.iconCont}>
            {!mobNav ? (
              <span onClick={() => setMobNav(true)}>
                <Icon id="menu" />
              </span>
            ) : (
              <span onClick={() => setMobNav(false)}>
                <Icon id="close" />
              </span>
            )}
          </div>
          <div className={classes.app_nav_div}>
            <Navbar />
          </div>
        </header>
        <main>{props.children}</main>
        <MQNavbar setMobNav={setMobNav} mobNav={mobNav} />
      </div>
    </>
  );
};
export default AppLayout;
