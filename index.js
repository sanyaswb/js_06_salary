function byModule(props) {
	const amountSaltBeef = props.saltBeefBought * props.saltBeefPrice;
	const amountRedRice = props.redRiceBought * props.redRicePrice;
	const amountOldVine = props.oldVineBought * props.oldVinePrice;
	const totalAmountProducts = amountSaltBeef + amountRedRice + amountOldVine;
	const leftoverSalary = props.salary - totalAmountProducts;
	const result = leftoverSalary % props.exchange;
	return result;
}

module.exports = byModule;