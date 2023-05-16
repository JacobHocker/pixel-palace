import React from 'react';
import './styles/Sidebar.css';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillMediumCircle, AiFillDribbbleCircle} from 'react-icons/ai';

import { motion, AnimatePresence, useCycle } from 'framer-motion';

const Sidebar = () => {
    const [open, cycleOpen] = useCycle(false, true);

    const navLinks = [
        {
            id: 0,
            text: "Home",
            link: "/",
        },
        {
            id: 1,
            text: "Games",
            link: "/games",
        },
        {
            id: 2,
            text: "About",
            link: "/about",
        },
    ];

    const itemVariants = {
        closed: {
            opacity: 0
            },
        open: { opacity: 1 }
    };

    
        
    const sideVariants = {
        closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
        },
        open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
        }
    };
    
    return (
        <main >
            <AnimatePresence>
                { open &&
                    <motion.div 
                    className='sidebar'
                    initial={{ width: 0 }}
                    animate={{ width: '35%'}}
                    exit={{
                        width: 0,
                        transition: { delay: 0.7, duration: 0.3}
                    }}
                    >

                        {/* SITE NAV LINKS */}
                        <motion.div className='sideNav'
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sideVariants}
                        >
                                { navLinks.map((link) => (
                                    <motion.a 
                                    key={link.id} 
                                    href={link.link} 
                                    className='navLink'
                                    whileHover={{
                                        color: 'rgb(255, 2, 255)',
                                        transition: 0.8,
                                    }}
                                    variants={itemVariants}
                                    >
                                        {link.text.toUpperCase()}
                                    </motion.a>
                                ))}
                        </motion.div>



                        {/* SOCIAL NAV LINKS */}
                        <motion.div className='socialNav'
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sideVariants}
                        >

                                    <motion.a 
                                    href='https://www.linkedin.com/in/jacobhocker/'
                                    className='socialLink'
                                    whileHover={{
                                        color: 'rgb(255, 2, 255)',
                                        transition: 0.8,
                                    }}
                                    target='_blank'
                                    variants={itemVariants}
                                    >
                                        <AiFillLinkedin />
                                    </motion.a>

                                    <motion.a 
                                    href='https://github.com/JacobHocker/pixel-palace'
                                    className='socialLink'
                                    whileHover={{
                                        color: 'rgb(255, 2, 255)',
                                        transition: 0.8,
                                    }}
                                    target='_blank'
                                    variants={itemVariants}
                                    >
                                        <AiFillGithub />
                                    </motion.a>
                                
                                    <motion.a 
                                    href='https://medium.com/@jacobhocker'
                                    className='socialLink'
                                    whileHover={{
                                        color: 'rgb(255, 2, 255)',
                                        transition: 0.8,
                                    }}
                                    target='_blank'
                                    variants={itemVariants}
                                    >
                                        <AiFillMediumCircle />
                                    </motion.a>

                                    <motion.a 
                                    href='https://dribbble.com/JacobHocker'
                                    className='socialLink'
                                    whileHover={{
                                        color: 'rgb(255, 2, 255)',
                                        transition: 0.8,
                                    }}
                                    target='_blank'
                                    variants={itemVariants}
                                    >
                                        <AiFillDribbbleCircle />
                                    </motion.a>

                                    <motion.a 
                                    href='mailto:jacobdouglas06@gmail.com'
                                    className='socialLink'
                                    whileHover={{
                                        color: 'rgb(255, 2, 255)',
                                        transition: 0.8,
                                    }}
                                    target='_blank'
                                    variants={itemVariants}
                                    >
                                        <AiFillMail />
                                    </motion.a>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
            {
                open ?
            <div className='sidebarBtnCloseContainer'>
                <button onClick={cycleOpen} className='sidebarClose'>
                    X
                </button>
            </div>
            :
            <div className='sidebarBtnOpenContainer'>
                <button onClick={cycleOpen} className='sidebarOpen'>
                    Menu
                </button>
            </div>
            }
        </main>
    )
}

export default Sidebar