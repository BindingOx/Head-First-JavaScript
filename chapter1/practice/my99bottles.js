var bottles = 99;
while (bottles > 1) {
	console.log(bottles + ' bottles of beer on the wall,');
	console.log(bottles + ' bottles of beer,');
	console.log('You take one down, pass it around,');
	bottles = bottles - 1;
	if (bottles > 1) {
		console.log(bottles + ' bottles of beer on the wall.');
	} else {
		console.log('One bottle of beer on the wall!');
		console.log('One bottle of beer on the wall,');
		console.log('One bottle of beer,');
		console.log('You take one down, pass it around,');
		console.log('No more bottles of beer on the wall!');
	}
}
