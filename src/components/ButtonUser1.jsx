import '../styles/Counter.css';
import React from 'react';

class ButtonUser1 extends React.Component{
    render(){
        return(
            <>
            <button className='button-wins-user1'
               onClick={this.props.manageClickUser1}>
                {this.props.text}

            </button>
            </>
        );
    }
}

export default ButtonUser1;
