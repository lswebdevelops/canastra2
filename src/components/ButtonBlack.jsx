import '../styles/Button.css';
import React from 'react';
import { GiCard3Clubs } from "react-icons/gi";

class ButtonBlack extends React.Component{
    render(){
        return(
            <>
                <button 
             className='blackButton'
             onClick={this.props.manageBlackClick}>
                <GiCard3Clubs />
             </button>
            </>
        )
    }
}
export default ButtonBlack;
