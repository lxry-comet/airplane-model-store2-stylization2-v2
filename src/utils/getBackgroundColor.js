// export function getBgColor(year) {
// let bgColor = '#ffdb92';

// 	if(year > 1946) bgColor = '#d2fdbd';

// 	if (year > 1999) bgColor = '#d6f1ff';
// 	return bgColor;
// }

export function getBgColor(year) {
	const arrayClass = ['listItem', 'last', 'current'];
	let bgColor = ['listItem'];
	if(year > 1946) bgColor = ['listItem', 'last'];
	if (year > 1999) bgColor = ['listItem', 'last', 'current'];
	return bgColor;
}