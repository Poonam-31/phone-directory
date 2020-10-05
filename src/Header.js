import React from 'react';
import './Header.css';

//Function Component

const Header = function(){
    return(
        <div className="header">
             Phone directory
        </div>
    )
}

// const Header = function(){
//     return(
//         <div className="header" style={{textAlign:'center',padding:20,background:'#000',color:'#ffff',textTransform:'uppercase'}}>
//              Phone directory
//         </div>
//     )
// }

// const Header = function(){
//     const headerStyle = {textAlign:'center',padding:20,background:'#000',color:'#ffff',textTransform:'uppercase'};
//     return(
//         <div className="header" style={headerStyle}>
//              Phone directory
//         </div>
//     )
// }


//Class Component

// class Header extends React.Component{
//     render(){
//         return(
//             <div className="header">
//                Phone directory
//            </div> 
//         )
//     }       
// }

export default Header;