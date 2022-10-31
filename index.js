function byModule(props) {
	return (props.salary - ((props.saltBeefBought * props.saltBeefPrice) + (props.redRiceBought * props.redRicePrice) + (props.oldVineBought * props.oldVinePrice))) % props.exchange;
}

module.exports = byModule;