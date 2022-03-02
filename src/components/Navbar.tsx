import React, {useState} from 'react'
import { NavbarPropsType } from '../types/data.model' 

// optional props token 
const Navbar : React.FC<NavbarPropsType>  = ({fName, lName, isLoggedIn, token}) => {
    const [accessToken, setAccessToken] = useState<string>('');
  
    console.log('Token', token);
   
  //  if(!token ){
  //   setAccessToken('zx46wnfpdghsplafp')
  //  }

   console.log('Access Token', accessToken, isLoggedIn);
   console.log('Greeting props : ', fName);
    return (
    <div className="container my-2">
     <nav className="navbar navbar-light  ">
        <div className="container-fluid">
        <a className="navbar-brand text-warning text">Welcome to web dev</a>
        <form className="d-flex">
            {
                isLoggedIn ? (
                <div className="dropdown mt-4">
                  <button className="btn btn-outline-success dropdown-toggle" type="button" 
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Profile</button> 
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">{`${fName} ${lName}`}</a></li>  
                    </ul> 
                </div>
                ):
                <button className="btn btn-outline-primary" type="submit">Login</button> 

            } 
        </form>
        </div>
     </nav> 
    </div>
  )
}

export default Navbar; 