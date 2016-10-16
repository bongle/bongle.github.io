function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

		var age = prompt('How old are you?');
	age = parseInt(age); 

	if (age >= 18) {
		console.log('User is an adult.');
	} else if (age >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.');
	}

	var faveColour = prompt('What is your favourite colour?');
	faveColour = faveColour.toLowerCase().trim();
	if (faveColour == 'red' ||
		faveColour == 'blue' ||
		faveColour =='green' ||
		faveColour == 'yellow') {
		$('h1').css('color', faveColour);
	}

	if (firstName.toLowerCase() === 'general' &&
		lastName.toLowerCase() !== 'assembly') {
		console.log('Hello General!');
	}

}



// when the page has loaded
$(function() {

	// When the user clicks on the image, run askQuestions
	$('img').on('click', askQuestions);

	//when the user clicks an h3
	$('h3').on('click', function() {

		//slideToggle the next element the bit in the brackets is the speed
		$(this).next().slideToggle(500);

	});
});