import '../styles/Counter.css';
import React from 'react';

class ButtonUser2 extends React.Component{
    render(){
        return(
            <>
            <button className='button-wins-user2'
               onClick={this.props.manageClickUser2}>
                {this.props.text}

            </button>
            </>
        );
    }
}

export default ButtonUser2;
