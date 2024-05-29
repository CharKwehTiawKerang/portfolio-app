import React, { useEffect, createRef, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Lottie from 'lottie-web'

import Logo from '../animations/logo.json'
import Home from '../animations/home.json'
import Gear from '../animations/gear.json'
import Hourglass from '../animations/hourglass.json'
import Bulb from '../animations/bulb.json'

const Navbar = () => {
  //create ref
  let logoAnimationContainer = createRef()
  const [onMenu, setOnMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const showMenu = (e) => {
    e.preventDefault();

    if(onMenu == false) {
      setOnMenu(true);
    } else if(onMenu == true) {
      setOnMenu(false);
    }
    console.log(windowWidth)
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    //create var
    var homeId = document.getElementById("home");
    var gearId = document.getElementById("gear");
    var hourglassId = document.getElementById("hourglass");
    var bulbId = document.getElementById("bulb");
    var homeHover = document.getElementById("home-hover-animation");
    var gearHover = document.getElementById("gear-hover-animation");
    var hourglassHover = document.getElementById("hourglass-hover-animation");
    var bulbHover = document.getElementById("bulb-hover-animation");

    //create animation variable
    const logoAnimation = Lottie.loadAnimation({
      container: logoAnimationContainer.current,
      animationData: Logo
    })

    const homeAnimation = Lottie.loadAnimation({
      container: homeId,
      renderer: "svg",
      loop: false,
      autoplay: false,
      prerender: true,
      animationData: Home
    });

    const gearAnimation = Lottie.loadAnimation({
      container: gearId,
      renderer: "svg",
      loop: true,
      autoplay: false,
      prerender: true,
      animationData: Gear
    });

    const hourglassAnimation = Lottie.loadAnimation({
      container: hourglassId,
      renderer: "svg",
      loop: false,
      autoplay: false,
      prerender: true,
      animationData: Hourglass
    });

    const bulbAnimation = Lottie.loadAnimation({
      container: bulbId,
      renderer: "svg",
      loop: false,
      autoplay: false,
      prerender: true,
      animationData: Bulb
    });

    //create hover function
    homeHover.addEventListener("mouseenter", function () {
      homeAnimation.play();
    });

    homeHover.addEventListener("mouseleave", function () {
      homeAnimation.stop();
    });

    gearHover.addEventListener("mouseenter", function () {
      gearAnimation.play();
    });

    gearHover.addEventListener("mouseleave", function () {
      gearAnimation.stop();
    });

    hourglassHover.addEventListener("mouseenter", function () {
      hourglassAnimation.play();
    });

    hourglassHover.addEventListener("mouseleave", function () {
      hourglassAnimation.stop();
    });

    bulbHover.addEventListener("mouseenter", function () {
      bulbAnimation.play();
    });

    bulbHover.addEventListener("mouseleave", function () {
      bulbAnimation.stop();
    });

    // bulbHover.addEventListener("click", function () {
    //   bulbAnimation.goToAndStop(4000)
    //   bulbAnimation.removeEventListener("mouseleave")
    // });

    // bulbHover.addEventListener("click", function () {
    //   bulbAnimation.play();
    //   if(bulbAnimation.complete())
    //     bulbAnimation.pause();
    // });
    window.addEventListener('resize', handleResize);

    //return function
    return () => {
      //to clean up for unmounting
      logoAnimation.destroy()
      homeAnimation.destroy()
      gearAnimation.destroy()
      hourglassAnimation.destroy()
      bulbAnimation.destroy()

      window.removeEventListener('resize', handleResize);
    }
  }, [])
  

  return (
    <>
      <Fade left>
        <div className={ onMenu ? 'show-menu' : 'navbar-wrapper'}>
            <div className='logo-wrapper'>
              <Link to='/' onClick={() => setOnMenu(false)}>
                <div className='logo' ref={logoAnimationContainer}/>
              </Link> 
              { onMenu && (
              <div className='button-close' onClick={() => setOnMenu(false)}>
                X
              </div>)}
            </div>
            <div className="navlink-wrapper">
              <Fade left delay={200}>
                <NavLink to='/' id='home-hover-animation' onClick={() => setOnMenu(false)}><span className='animation-icon-wrapper' id='home'></span>Home</NavLink>
              </Fade>
              <Fade left delay={400}>
                <NavLink to='/work' id='gear-hover-animation' onClick={() => setOnMenu(false)}><span className='animation-icon-wrapper' id='gear'></span>Work</NavLink>
              </Fade>
              <Fade left delay={600}>
                <NavLink to='/about' id='hourglass-hover-animation' onClick={() => setOnMenu(false)}><span className='animation-icon-wrapper' id='hourglass'></span>About</NavLink>
              </Fade>
              <Fade left delay={800}>
                <NavLink to='/contact' id='bulb-hover-animation' onClick={() => setOnMenu(false)}><span className='animation-icon-wrapper' id='bulb'></span>Contact</NavLink>
              </Fade>
            </div>

            <div className='footer-wrapper'>
              <p>Made with <span className='heart'>💖</span>.</p>
              <p>Designed by Hariz Asyraf ㇐ 2024.</p>
            </div>
        </div>
      </Fade>

      { windowWidth < 934 && (
        <div className='burger-menu' onClick={showMenu}>
          &#9776;
        </div>
        )
      }

        
    </>
  )
}

export default Navbar