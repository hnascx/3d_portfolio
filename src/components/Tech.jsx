// import { Tilt } from 'react-tilt'
// import { motion } from 'framer-motion'
// import { fadeIn } from '../utils/motion'

// import { SectionWrapper } from '../hoc'
// import { technologies } from '../constants'


// const TechCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className='xs:w-[250px] w-full'>
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className='w-full green-pink-gradient p-[2px]  rounded-[20px] shadow-card'
//       >
//         <div
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450
//           }}
//           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         >
//           <img src={icon} alt={icon} className='w-16 h-16 object-contain' />
//         </div>
//       </motion.div>
//     </Tilt>
//   )
// }

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology, index) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <TechCard key={technology.icon} index={index} {...technologies} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default SectionWrapper(Tech, "")