import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

const __Navbar = () => {
	return (
		<nav 
			className="px-24 mx-auto py-8 flex flex-wrap items-center"
			style={{backgroundColor:'#231B64', boxShadow: 'rgba(3,27,78,0.1) 0px 2px 4px'}}
		>
			<div className="flex items-center">
				<Link to="/">
					<img className="inline-block mt-2 mr-6" src="/logo-small.png" style={{height: '35px'}} />
					<img className="inline-block mt-2" src="/logo-white.png" style={{height: '25px'}} />
				</Link>
				<div className="ml-24" style={{color: '#fff', opacity: .8}}>
					<HashLink className="nav-link" to="#section-1">How it works</HashLink>
					<HashLink className="nav-link" to="#section-pricing">Pricing</HashLink>
					<HashLink className="nav-link" to="#section-4">Portfolio</HashLink>
					<a className="nav-link" href="https://graaphicd.typeform.com/to/BAFUZkmF">Contact</a>
				</div>
			</div>

			<div className="ml-auto inline-block">
				<a href="https://app.graaphic.co/" className="py-6 px-16 rounded-lg uppercase font-bold" style={{fontSize: '14px', backgroundColor: 'white', color: '#423DCE'}}>
					Login
				</a>
			</div>
		</nav>
	)
};
const NavbarLight = () => {
  const [hidden, setHidden] = useState(true);

  return (
		<div 
			className="bruh md:px-24 py-8"
			style={{backgroundColor:'#231B64'}}
		>
    <Navbar expandSm light>
      <Nav start>
        <NavbarLink light brand href="#">
					<img className="inline-block mt-2 mr-6" src="/logo-small.png" style={{height: '3.5rem'}} />
					<img className="inline-block mt-2 mr-24" src="/logo-white.png" style={{height: '2.5rem'}} />
				</NavbarLink>
        <Nav end>
          <Button
						dark
            outline
            toggleCollapse
            expandSm
            onClick={() => setHidden(!hidden)}
          >
            <span>&#9776;</span>
          </Button>
        </Nav>
      </Nav>
      <Nav start collapse expandSm hidden={hidden}>
        <NavbarLink dark href="#section-1">Our process</NavbarLink>
        <NavbarLink dark href="#section-pricing">Pricing</NavbarLink>
        <NavbarLink dark href="#section-4">Portfolio</NavbarLink>
				<NavbarLink dark href="https://graaphicd.typeform.com/to/BAFUZkmF">Contact</NavbarLink>
				<a href="https://app.graaphic.co/" className="py-6 px-16 md:ml-auto rounded-lg uppercase font-bold" style={{textAlign: 'center',fontSize: '14px', backgroundColor: 'white', color: '#423DCE'}}>
					Login
				</a>
      </Nav>
    </Navbar>
		</div>
  );
};
export default NavbarLight;
