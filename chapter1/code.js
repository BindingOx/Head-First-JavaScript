scoops = 5;
while (scoops > 0) {
	console.log('Another scoop!');
	if (scoops < 3) {
		console.log('Ice cream is running low!');
	} else if (scoops >= 5) {
		console.log('Eat faster, the ice cream is going to melt!');
	}
	scoops = scoops - 1;
}
console.log("Life without ice cream isn't the same");

// 5
// "Another scoop!"
// "Eat faster, the ice cream is going to melt!"
// 4
// "Another scoop!"
// 3
// "Another scoop!"
// 2
// "Another scoop!"
// 'Ice cream is running low!'
// 1
// "Another scoop!"
// 'Ice cream is running low!'
// 0
// "Life without ice cream isn't the same"