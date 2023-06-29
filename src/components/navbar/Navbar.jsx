import React, { useState } from 'react'
import "./navbar.css"
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
const Menu = () => (
    <>
      <Link to="#Home" smooth><p>Home</p></Link>
      <Link to="#project" smooth><p>Projects</p></Link>
      <Link to="#About" smooth><p>About</p></Link>
      <Link to="#contact" smooth><p>Contact</p></Link>
    </>
  ) 

const Navbar = () => {

    const [ toggleMenu,setToggleMenu] = useState(false)
  return (
    <BrowserRouter>
      <div className='navbar'>
        <div className='navbar__links'>
            <div>
                <h3>
                    Sunday Favour Edidiong
                </h3>
            </div>

            <div className='navbar__links__container'>
                <Menu/>
            </div>

            <div className='menu__container'>
            {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
           {toggleMenu && (
          <div className='togglemenu scale-up-center'>

            <div className='togglemenu__links'>
              <Menu />
              {/* you can see the menu list at    the top */}
            </div>

          </div>
        )
        }
            </div>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default Navbar