
import PickupTab from "./PickupTab";
import Navbar from './Navbar';
const Home = () => {
	const workArray = [
		{
			id: 1,
			orders:[
				{
					order_id:1,
					name:"bob",
					date: new Date(),
					items:[
						{
							dpci:"1",
							quantity:5,
							type:"cooler"

						},
						{
							dpci:"2",
							quantity:5,
							type:"freezer"
						},
						{
							dpci:"3",
							quantity:5,
							type:"dry"
						}
					]
				},
				{
					order_id:2,
					name:"bobbt",
					date: new Date(),
					items:[
						{
							dpci:"1",
							quantity:5,
							type:"cooler"

						},
						{
							dpci:"2",
							quantity:5,
							type:"freezer"
						},
						{
							dpci:"3",
							quantity:5,
							type:"dry"
						}
					]
				}
			],
			type: "Grocery"
		},
		{
			id: 2,
			orders:[
				{
					order_id:1,
					name:"bob",
					date:new Date(),
					items:[
						{
							dpci:"1",
							quantity:5,
							type:"regular"

						},
						{
							dpci:"2",
							quantity:5,
							type:"regular"
						},
						{
							dpci:"3",
							quantity:5,
							type:"regular"
						}
					]
				}
			],
			type: "Pickup"
		},
		{
			id: 3,
			orders:[
				{
					order_id:1,
					name:"bob",
					date: new Date(),
					items:[
						{
							dpci:"1",
							quantity:5,
							type:"bulky"

						},
						{
							dpci:"2",
							quantity:5,
							type:"bulky"
						},
						{
							dpci:"3",
							quantity:5,
							type:"bulky"
						}
					]
				}
			],
			type: "Bulky"
		},
		{
			id: 4,
			orders:[
				{
					order_id:4,
					name:"bobs",
					date: new Date(),
					items:[
						{
							dpci:"1",
							quantity:5,
							type:"bulky"

						},
						{
							dpci:"2",
							quantity:5,
							type:"bulky"
						},
						{
							dpci:"3",
							quantity:105,
							type:"bulky"
						}
					]
				}
			],
			type: "Bulky"
		},
	]
	return (
		<>
			<Navbar inbatch={false}/>
			<div id="work-menu">
				<div className="work-menu-buttons">PICKUP ()</div>
				<div className="work-menu-buttons">SHIP ()</div>
				<div className="work-menu-buttons">RTS ()</div>
			</div>
			<PickupTab workArray={workArray}/>
			<div className="start-task"><div>Start Task</div></div>
		</>
	);
}

export default Home;