const byModule = require('./index');

test('Функция должна вернуть число', () => {
	const type = typeof byModule({
		salary: 331,
		saltBeefBought: 6,
		saltBeefPrice: 2,
		redRiceBought: 4,
		redRicePrice: 1,
		oldVineBought: 6,
		oldVinePrice: 3,
		exchange: 19
	});

	expect(type).toBe('number');
});

test('Тест. salary: 331, saltBeefBought: 6, saltBeefPrice: 2, redRiceBought: 4, redRicePrice: 1, oldVineBought: 6, oldVinePrice: 3, exchange: 11', () => {
	const res = byModule({
		salary: 331,
		saltBeefBought: 6,
		saltBeefPrice: 2,
		redRiceBought: 4,
		redRicePrice: 1,
		oldVineBought: 6,
		oldVinePrice: 3,
		exchange: 19
	});

	expect(res).toBe(12);
});

test('Тест. salary: 931, saltBeefBought: 9, saltBeefPrice: 5, redRiceBought: 5, redRicePrice: 2, oldVineBought: 5, oldVinePrice: 8, exchange: 12', () => {
	const res = byModule({
		salary: 931,
		saltBeefBought: 9,
		saltBeefPrice: 5,
		redRiceBought: 5,
		redRicePrice: 2,
		oldVineBought: 5,
		oldVinePrice: 8,
		exchange: 12
	});

	expect(res).toBe(8);
});

test('Тест. salary: 4621, saltBeefBought: 12, saltBeefPrice: 4, redRiceBought: 18, redRicePrice: 2, oldVineBought: 14, oldVinePrice: 7, exchange: 49', () => {
	const res = byModule({
		salary: 4621,
		saltBeefBought: 12,
		saltBeefPrice: 4,
		redRiceBought: 18,
		redRicePrice: 2,
		oldVineBought: 14,
		oldVinePrice: 7,
		exchange: 49
	});

	expect(res).toBe(29);
});

test('Тест. salary: 178, saltBeefBought: 5, saltBeefPrice: 2, redRiceBought: 2, redRicePrice: 1, oldVineBought: 4, oldVinePrice: 4, exchange: 5', () => {
	const res = byModule({
		salary: 178,
		saltBeefBought: 5,
		saltBeefPrice: 2,
		redRiceBought: 2,
		redRicePrice: 1,
		oldVineBought: 4,
		oldVinePrice: 4,
		exchange: 5
	});

	expect(res).toBe(0);
});