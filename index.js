function byModule(props) {
	const priceSaltBeef = props.saltBeefBought * props.saltBeefPrice;
	const priceRedRice = props.redRiceBought * props.redRicePrice;
	const priceOldVine = props.oldVineBought * props.oldVinePrice;
	const totalPriceProducts = priceSaltBeef + priceRedRice + priceOldVine;
	const leftOverSalary = props.salary - totalPriceProducts;
	const result = leftOverSalary % props.exchange;
	return result;
}

module.exports = byModule;