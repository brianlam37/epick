import React, {useState} from 'react'
import BatchHeader from "./BatchHeader"
import WorkList from './WorkList';
const PickupTab = ({workArray}) => {

	const [openPickup, setOpenPickup] = useState(false);
	const [openGrocery, setOpenGrocery] = useState(false);
	const [openBulky, setOpenBulky] = useState(false);
	const [openAdult, setOpenAdult] = useState(false);


	const displayWorkList = (type, open, hook) => {
		const work = workArray.filter((batch)=>{
			return batch.type === type;
		})
		return <WorkList type={type} open={open} hook = {hook} work = {work}/> 
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