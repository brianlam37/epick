import React, {useState} from 'react'
import BatchHeader from "./BatchHeader"
const PickupTab = ({work}) => {
	const workArray = [
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Grocery"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Grocery"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Bulky"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Bulky"

		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Bulky"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Adult Beverage"
		},	
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
		},
		{
			id: 1,
			time:"00:06",
			total_items:13,
			total_dpci:10,
			type: "Pickup"
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
			let dpci = 0;
			let items = 0;
			for(let i = 0; i < work.length;i++){
				dpci+=work[i].total_dpci;
				items+=work[i].total_items;
			}
			if(open){
				return (
					<>
						<div className="work-header"><span className="work-name">{type}</span><span>{items}({dpci}) <i className="fas fa-chevron-down chevron" onClick={() => hook(false)}></i></span></div>
						{work.map((batch, index) => {
							return (
								<div className="pickup-row " key = {batch.id+batch.type+index}>
									<span className ="batch-number"><input type="checkbox"/>{batch.type} {index+1}</span> 
									<span className="batch-time">{batch.time}</span> 
									<span className="batch-items">{batch.total_dpci}({batch.total_items})</span>
								</div>
							)
						})}
					</>

				)
			}else {
				return (
					<>
						<div className="work-header"><span className="work-name">{type}</span><span>{items}({dpci}) <i className="fas fa-chevron-right chevron" onClick={() => hook(true)}></i></span></div>
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