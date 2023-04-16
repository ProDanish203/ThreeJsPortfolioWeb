import React from 'react'
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../HOC";
import { styles } from "../Style";
import { github } from "../assets";
import { projects } from "../Constants";
import { fadeIn, textVariant } from "../Utils/motion";

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>

      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>

    </motion.div>

    <div className='w-full flex'>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rerum saepe numquam consequuntur optio quibusdam mollitia totam, iste, possimus nulla accusantium amet, minus quaerat? Facilis optio atque hic enim ipsum?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate optio quam modi expedita temporibus adipisci accusamus nam? Facilis fugit incidunt praesentium sapiente vel perferendis, inventore quas eius numquam in veniam!
      </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {
        projects.map((proj, index) => (
          <>
          <ProjectCard key={index} index={index} {...proj}/>
          </>
        ))
      }
    </div>

    </>
  )
}


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <>
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >

        <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>

              <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, ind) => (
              <>
              <p key={ind} className={`text-[14px] ${tag.color}`}>{tag.name}</p>
              </> 
            ))}
        </div>

      </Tilt>
    </motion.div>
    </>
  )
} 

export default SectionWrapper(Works, "")
