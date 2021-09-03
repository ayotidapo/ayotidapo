import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              A Software Engineer with hands on experience developing websites,
              full-stack web applications and APIs.
            </p>
            <p>
              I have over 4 years experience working professionally in
              Engineering; I've worked on-site and remotely in a distributing
              team of developers spread across the world. I'm proficient in
              JavaScript, Typescript, React, NodeJS, HTML and CSS, with past
              experience in Python and Java.
            </p>
            <p>
              I was a Frontend Developer at Travis CI where I contributed to the
              rolling out of 3D authentication for our automatic billing
              application. I worked with my team to develop the overall
              experience from selecting a plan to managing said plan. Also, I
              fixed bugs and other chores on Travis Web to ensure hitch-free
              user experience.
            </p>
            <p>
              I have also worked with Lagos-based companies like Zone Tech Park,
              and Paystack where I worked with my team to build non-trivial
              features for huge web applications.
            </p>
            <p>
              Outside of work, I'm a football enthusiast, and I play weekly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
