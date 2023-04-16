import React, { useState, useRef} from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../HOC";
import { styles } from "../Style";
import { slideIn } from "../Utils/motion";
import { EarthCanvas } from "./Canvas";


const Contact = () => {

  const templateID = "template_m2dlv8n"
  const serviceID = "service_bg65x0d"
  const APIKey = "6wBqthpMqYBlmxOLU"


  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const {name, value} = e.target

    setForm({...form, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_bg65x0d',
      'template_m2dlv8n',
      {
        from_name: form.name,
        to_name: "Danish Siddiqui",
        from_email: form.name,
        to_email: "danosiddiqui203@gmail.com",
        message: form.message,
      },
      '6wBqthpMqYBlmxOLU'
    )
    .then(() => {
      setLoading(false);
      alert("Your response has been submitted")

      setForm({
        name: "",
        email: "",
        message: "",
      })

    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something Went Wrong!!!");
    })

  }

  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

        <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h2 className={styles.sectionHeadText}>Contact.</h2>


          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name</span>
              <input 
              type="text" 
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter Name'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name</span>
              <input 
              type="email" 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter Email Address'
              required
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name</span>
              <textarea 
              rows={7} 
              name='message'
              value={form.message}
              required
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              ></textarea>
            </label>

            <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            > 
              {loading ? "Sending..." : "Send"}
            </button>

          </form>

        </motion.div>

        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >

            <EarthCanvas/>

        </motion.div>



    </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")