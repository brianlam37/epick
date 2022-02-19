const BatchHeader = ({instruction, cartName,inBatch}) => {
	const displayBatch = () => {
		if(inBatch){
			return (
				<div className = "inbatch">
					<span><i className="fas fa-shopping-cart"></i>{cartName}</span>
					<div id="exit">
						exit<img alt ="exit-icon"></img>
					</div>
				</div>
			)
		}
	}
	return (
		<>
			<div id="instruction">{instruction}</div>
			{displayBatch()}
		</>
	)

}

export default BatchHeader