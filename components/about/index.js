import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classes from "./about.module.css";
import React from "react";

export default function About() {
  return (
    <div className={classes.container}>
      <div className={classes.top_wrapper}>
        <h2 className={classes.headr}>Who am I?</h2>
        <div className={classes.wrapper}>
          <div className={classes.left_side}>
            <div className={classes.avatar_div}>
              <div>
                <Image src="/me.jpeg" alt="me" width={200} height={200} />
              </div>
              <div>
                <Image src="/anon.jpg" alt="me" width={200} height={200} />
              </div>
            </div>
          </div>
          <div className={classes.ryt_side}>
            <p>
              A Software Engineer who is passionate about coding and developing
              application for web platform with hands on experience in
              developing APIs.
            </p>
            <p>
              I have years of experience working professionally as a Frontend
              Engineer. I&apos;ve worked on a couple of real-life problem
              solving projects with a team of developers both on-site and
              remotely.
            </p>
            <p>
              Some of the projects I have worked on can be found on my{" "}
              <Link href="/portfolio">
                <a style={{ color: "#06bbad" }}>portfolio </a>
              </Link>
              page which includes Task outsourcing platform,learning management
              system etc
            </p>
            <p>
              I use technologies like ReactJS, Redux, NextJS, GraphQL, Node,
              ExpressJS, Mongoose to create beautiful stuff.
            </p>
            <p>
              I am currently working with a team of developers building a
              Fintech solution at{" "}
              <Link href="http://www.eyowo.com">
                <a style={{ color: "#06bbad" }} target="_blank">
                  Eyowo{" "}
                </a>
              </Link>{" "}
            </p>
            <p>At my leisure time, I watch movies and play ping pong game.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
