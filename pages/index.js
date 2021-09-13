import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect/dist/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/Home.module.css";
import React from "react";
import Navbar from "../components/appLayout/Navbar";

export default function Home() {
  React.useEffect(() => {
    new Typewriter("#typewriter", {
      strings: [
        "An Experienced Frontend and web developer.",
        "Javascript Enthusiast",
      ],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <article className={classes.art1}>
            <div>
              <span className={classes.hero}>
                <span style={{ fontSize: "1.4rem" }}>My name is&nbsp;</span>
                &nbsp;<span className={classes.name}>OLADAPO AYO OTI</span>
              </span>
              <p className="f-2 mb-10">
                I&apos;m a Software Engineer (MERN Stack Developer)
              </p>
              <p className="mt-5" id="typewriter"></p>

              <Navbar />

              <div className={classes.social}>
                <Link href="/">
                  <a>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Link>
              </div>
            </div>
          </article>

          <article>
            <div className={classes.heroImg}>
              <div className={classes.imgOverlay} />
              <Image
                src="/BW.png"
                alt="BW"
                width={400}
                height={400}
                className={classes.img}
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
