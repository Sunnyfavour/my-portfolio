import React, { useState } from 'react'
import "./navbar.css"
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
const Menu = () => (
    <>
      <p><a href="#Home">Home</a></p>
      <p><a href="#Project">Projects</a></p>
      <p><a href="#About">About</a></p>
      <p><a href="#Blog">Contact</a></p>
    </>
    
  ) 

const Navbar = () => {

    const [ toggleMenu,setToggleMenu] = useState(false)
  return (
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
          <div className='gpt3__navbar-menu_container scale-up-center'>

            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              {/* you can see the menu list at    the top */}
            </div>

          </div>
        )
        }
            </div>
        </div>
    </div>
  )
}

export default Navbar