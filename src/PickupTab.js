import React, {useState} from 'react'
import BatchHeader from "./BatchHeader"
const PickupTab = ({work}) => {
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
	]
	const [openPickup, setOpenPickup] = useState(false);
	const [openGrocery, setOpenGrocery] = useState(false);
	const [openBulky, setOpenBulky] = useState(false);
	const [openAdult, setOpenAdult] = useState(false);
	const displayWorkList = (type, open, hook) => {
		const work = workArray.filter((batch)=>{
			return batch.type === type;
		})

		if(work.length > 0){
			let dpci = new Set();
			let totalItems = 0;
			for(let i = 0; i < work.length;i++){
				const orders = work[i].orders
				console.log(orders, "orders")
				for(let j = 0; j < orders.length;j++){
					const items = orders[j].items;
					console.log(items, "items")
					
					for(let k = 0; k < items.length;k++){
						totalItems+=items[k].quantity;
						dpci.add(items[k].dpci)
					}
				}
			}
			const calculateTimeDiff = (date) => {
				let batchTime = new Date(date);
				batchTime.setMinutes(batchTime.getMinutes() + 90);
				let currentTime = new Date()
				let timeDiff = new Date(batchTime.getTime() - currentTime.getTime());
				return timeDiff
			}
			if(open){
				return (
					<>
						<div className="work-header"><span className="work-name">{type}</span><span>{dpci.size}({totalItems}) <i className="fas fa-chevron-down chevron" onClick={() => hook(false)}></i></span></div>
						{work.map((batch, index) => {
							let batchTotalItems = 0;
							let batchDpci = new Set();
							console.log(batch)
							const orders = batch.orders
							let shortestTimeLeft = calculateTimeDiff(orders[0].date) ;
							for(let j = 0; j < orders.length;j++){
								const items = orders[j].items;
								let timeDiff = calculateTimeDiff(orders[j].date);
								if(shortestTimeLeft < timeDiff){
									timeDiff = shortestTimeLeft;
								}

								for(let k = 0; k < items.length;k++){
									batchTotalItems+=items[k].quantity;

									batchDpci.add(items[k].dpci)
								}
							}
							const mins = Math.floor(shortestTimeLeft/(1000 * 60))%60;
							const hrs = Math.floor(shortestTimeLeft/(1000 * 60 * 60));
							//const secs = Math.floor(shortestTimeLeft/(1000)) - mins * 60 - hrs * 3600;
							return (
								<div className="pickup-row " key = {batch.id+batch.type+index}>
									<span className ="batch-number"><input type="checkbox"/>{batch.type} {index+1}</span> 
									<span className="batch-time">{hrs}:{mins}</span> 
									<span className="batch-items">{batchDpci.size}({batchTotalItems})</span>
								</div>
							)
						})}
					</>

				)
			}else {
				return (
					<>
						<div className="work-header"><span className="work-name">{type}</span><span>{dpci.size}({totalItems}) <i className="fas fa-chevron-right chevron" onClick={() => hook(true)}></i></span></div>
					</>

				)
			}
		}
	} 
	return (
		<>
		<BatchHeader instruction="select your work" inBatch={false}/>
		<div id="pickup-header"><span className ="batch-number">type</span> <span className="batch-time">due time</span> <span className="batch-items">DPCI(eaches)</span></div>
		<div className="work-container">
			{displayWorkList("Pickup", openPickup, setOpenPickup)}
			{displayWorkList("Grocery", openGrocery, setOpenGrocery)}
			{displayWorkList("Bulky", openBulky, setOpenBulky)}
			{displayWorkList("Adult Beverage", openAdult, setOpenAdult)}
		</div>
		</>
	)
}

export default PickupTab;