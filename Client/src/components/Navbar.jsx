import React, {useState} from 'react'
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const [visible, setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        
        <img src={logo} alt="logo" srcset="" className='w-40'/>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to= '/' className='flex flex-col items-center uppercase gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to= '/collection' className='flex flex-col items-center uppercase gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink to= '/about' className='flex flex-col items-center uppercase gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to= '/contact' className='flex flex-col items-center uppercase gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={search}  className='w-5 cursor-pointer' alt=''/>
            <div className='group relative'>
               <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" className="w-6 cursor-pointer" alt="" srcset="" /> 
               <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
               </div>
            </div>

            <Link to = '/cart' className='relative'>
                <img src="	https://cdn-icons-png.flaticon.com/512/4903/4903482.png" alt="" srcset="" className='w-7 min-w-5'/>
                <p className='absolute right-[-4px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>10</p>
            </Link>
            <img onClick = {()=>setVisible(true)} src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" alt="" srcset="" className='w-7 cursor-pointer sm:hidden' />
        </div>
        {/* Sidebar Menu for Small Screen */}
        <div className ={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
            <div className ='flex flex-col text-gray-600'>
                <div onClick = {()=>setVisible(false)}className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYBQdfSb1F37cxA3wmKwqLCgh-eCqt3wXpg&s" alt="" srcset="" className='h-4 rotate-180' />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to ='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to ='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to ='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to ='/contact'>CONTACT</NavLink>


            </div>
        </div>
    </div>
  )
}

export default Navbar