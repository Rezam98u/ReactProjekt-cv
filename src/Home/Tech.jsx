import BallCanvas from "./Ball";

import css from "../img/tech/css.png";
import docker from "../img/tech/docker.png";
import figma from "../img/tech/figma.png";
import git from "../img/tech/git.png";
import html from "../img/tech/html.png";
import javascript from "../img/tech/javascript.png";
import mongodb from "../img/tech/mongodb.png";
import nodejs from "../img/tech/nodejs.png";
import reactjs from "../img/tech/reactjs.png";
import redux from "../img/tech/redux.png";
import tailwind from "../img/tech/tailwind.png";
import typescript from "../img/tech/typescript.png";
import threejs from "../img/tech/threejs.svg";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]

////////////////////////////
const Tech = () => {
  return (
    <div className='w-[93%] mx-auto flex flex-row flex-wrap justify-center gap-10 py-4'>
      {technologies.map(technology =>
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      )}
    </div>
  )
}

export default Tech;
