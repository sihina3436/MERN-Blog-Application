import { Footer } from 'flowbite-react'
import {Link} from 'react-router-dom'
import React from 'react'
import { BsFacebook, BsInstagram, BsGithub, BsDribbble } from "react-icons/bs";

const FooterCom = () => {
  return (
   <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5 '>
                     <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                       <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white'>CodeLink</span>
                        LK
                    </Link>
                </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                       <div>
                       <Footer.Title title='ABOUT'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='http://www.https://www.w3schools.com/' target='_blank' rel='noopener noreferrer'>
                                MERN Projects
                            </Footer.Link>
                            <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                CodeLinkLK
                            </Footer.Link>
                            
                        </Footer.LinkGroup>
                       </div>
                       <div>
                       <Footer.Title title='FOLLOW US'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                Github
                            </Footer.Link>
                            <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                Linkdin
                            </Footer.Link>
                            
                        </Footer.LinkGroup>
                       </div>
                       <div>
                       <Footer.Title title='LEGAL'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                Privacy policy
                            </Footer.Link>
                            <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                Term &amp; condition
                            </Footer.Link>
                        </Footer.LinkGroup>
                       </div>
                    </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by='CodeLinkLK' year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                </div>
            </div>
        </div>
   </Footer>
  )
}

export default FooterCom
