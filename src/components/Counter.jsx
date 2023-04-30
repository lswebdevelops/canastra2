import '../styles/Counter.css';
import React from 'react';


class Counter extends React.Component{
    render(){
        return(
            <div className='counter-container'>  

            <div className='div-wins-user1'
            onClick={this.props.manageNumberClickUser1}>
            {this.props.numClicksUser1}                 
                </div>            
           <div className='div-wins-user2'
           onClick={this.props.manageNumberClickUser2}> 
            {this.props.numClicksUser2} 
            
           </div>      
            </div>
        );
    }
}

export default Counter;
