
import PickupTab from "./PickupTab";
import Navbar from './Navbar';
const Home = () => {
	return (
		<>
			<Navbar inbatch={false}/>
			<div id="work-menu">
				<div className="work-menu-buttons">PICKUP ()</div>
				<div className="work-menu-buttons">SHIP ()</div>
				<div className="work-menu-buttons">RTS ()</div>
			</div>
			<PickupTab/>
			<div className="start-task"><div>Start Task</div></div>
		</>
	);
}

export default Home;