import { motion } from "framer-motion";
import { data } from "../data";
import Title from "../title/Title";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../Loader";
const Project = dynamic(() => import("../project/Project"));

const Projects = ({ setTrans }) => {
  return (
    <div className=" pt-32 px-2 lg:px-10 section min-h-screen" id="projects">
      <div
        className="mb-20"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4 },
        }}
      >
        <Title title1={"projects"} title2={"what i have built"} />
      </div>

      <div className="max-w-[1200px] w-full mx-auto grid md:grid-cols-2 gap-6 sm:px-6 ">
        {data
          .sort((a, b) => b.id - a.id)
          .map((el, i) => (
            <Suspense fallback={<Loader />} key={el.id}>
              <Project
                setTrans={setTrans}
                i={i}
                
                id={el.id}
                name={el.name}
                img={el.img}
                pull={el.pull}
              />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default Projects;
