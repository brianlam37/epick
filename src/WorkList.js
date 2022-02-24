import React, {useState} from 'react';
const WorkList = ({work, open, hook, type}) => {
	const [checked, setChecked] = useState(new Array(work.length).fill(false));
	const [openState, setOpenState] = useState(new Array(work.length).fill(false));
	const handleOpenToggle = (position) => {
		const updatedOpenState = openState.map((item, index) => {
			return index === position ? !item : item
		})
		setOpenState(updatedOpenState);
	}
	const getHMS = (timeDiff) => {
		const mins = Math.floor(timeDiff/(1000 * 60))%60;
		const hrs = Math.floor(timeDiff/(1000 * 60 * 60));
		const secs = Math.floor(timeDiff/(1000)) - mins * 60 - hrs * 3600;
		return [hrs, mins, secs];
	}
	if(work.length > 0){
		let dpci = new Set();
		let totalItems = 0;
		for(let i = 0; i < work.length;i++){
			const orders = work[i].orders
			for(let j = 0; j < orders.length;j++){
				const items = orders[j].items;
				for(let k = 0; k < items.length;k++){
					totalItems+=items[k].quantity;
					dpci.add(items[k].dpci);
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
						const [hrs, mins] = getHMS(shortestTimeLeft);
						console.log(openState)
						if(openState[index]){
							const displayOrders = () => {
								return orders.map((order) => {
									let orderItems = 0;
									let orderDpci = order.items.length
									console.log(order)
									const orderTimeDiff = calculateTimeDiff(order.date);
									for(let k = 0; k < order.items.length;k++){
										orderItems+=order.items[k].quantity;
									}
									const [orderHrs, ordersMins] = getHMS(orderTimeDiff);
									return (
										<div>
											<span className="batch-name">{order.name}</span>
											<span className="batch-time">{orderHrs}:{ordersMins}</span>
											<span className="batch-items">{orderDpci}({orderItems})</span>
										</div>
									)
								})
							}

							return (
								<div className ="full-open-pickup-row">
									<div className="open-pickup-row " key = {batch.id+batch.type+index}>
										<span className ="batch-number"><input type="checkbox"/>{batch.type} {index+1}</span> 
										<span className="batch-time">{hrs}:{mins}</span> 
										<span className="batch-items">{batchDpci.size}({batchTotalItems})<i className="fas fa-chevron-down chevron" onClick={() => handleOpenToggle(index)}></i></span>
										
									</div>
									<div className ="gray-text">
										{displayOrders()}
									</div>
								</div>
							)
						}
						return (
							<div className="pickup-row " key = {batch.id+batch.type+index}>
								<span className ="batch-number"><input type="checkbox"/>{batch.type} {index+1}</span> 
								<span className="batch-time">{hrs}:{mins}</span> 
								<span className="batch-items">{batchDpci.size}({batchTotalItems})<i className="fas fa-chevron-right chevron" onClick={() => handleOpenToggle(index)}></i></span>
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
	return <></>
}

export default WorkList;