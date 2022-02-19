import React from 'react';

const Navbar = ({inbatch}) => {
	if(inbatch){
		return (
			<div id="navbar">
				<span><i className="fas fa-user-circle"></i><span id="pick-title">Pick</span></span><i className='fas fa-search'></i>
			</div>
		)
	}else {
		return (
			<div id="navbar">
				<span><i className="fas fa-user-circle"></i><span id="pick-title">Pick</span></span>
			</div>
		)
	}
}

export default Navbar;