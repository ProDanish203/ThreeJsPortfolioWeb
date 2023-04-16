import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../Style";
import { services } from "../Constants";
import { fadeIn, textVariant } from "../Utils/motion";
import { SectionWrapper } from '../HOC';


const ServiceCard = ({ index, title, icon}) => {
  return (
    <>
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45, 
          scale: 1,
          speed: 1000
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>  
      </motion.div>
    </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>

      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>

    </motion.div>

    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus consequatur sit, porro aut reprehenderit laboriosam culpa totam. Praesentium alias adipisci delectus dolor itaque accusamus quod totam soluta, exercitationem ipsa.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quas, laudantium veniam aliquam quod, accusamus molestias incidunt earum modi nihil corporis vel ex voluptatibus dolores nemo eligendi repudiandae, dolore est!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>

      {services.map((service, index) => {
        return (
          <ServiceCard key={service.title} index={index} {...service}/>
        )
      })}

    </div>


    </>
  )
}

// export default About;
export default SectionWrapper(About, "about");
