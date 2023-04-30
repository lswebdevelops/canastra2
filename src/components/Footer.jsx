import '../styles/Footer.css';
import React from 'react';
import { AiFillGithub } from "react-icons/ai";


class Footer extends React.Component{
    render(){
        return(
            <footer>
                LS-Web Development 
               
                <a className='footerLink' href='https://github.com/lswebdevelops' target='__blank'> <AiFillGithub /></a>
                 
            </footer>
        )
    }
}

export default Footer;
