import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/about/about"));

const Skills = dynamic(() => import("@/components/skills/skills"));

const Projects = dynamic(() => import("@/components/projects/projects"));

const Contact = dynamic(() => import("@/components/contact/contact"));

const HomeSection = dynamic(() => import("@/components/home/HomeSection"));
import { useRouter } from "next/router";
import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import Loader from "@/components/Loader";

export default function Home() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <Head>
        <title>Ammar | Frondend Developer</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div>
        <Suspense fallback={<Loader />}>
          <HomeSection />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      </div>
    </motion.div>
  );
}
