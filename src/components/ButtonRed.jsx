import '../styles/Button.css';
import React from 'react';
import { GiCard3Hearts } from "react-icons/gi";

class ButtonRed extends React.Component{
    render(){
        return(
            <>   
             <button 
            className='redButton'
            onClick={this.props.manageRedClick}>
                <GiCard3Hearts />
            </button>

            </>
        )
    }
}
export default ButtonRed;
