$(document).ready( function() {
	$("#click").click( function(){
// Add one to var A every time until it hits 100
		for (var a = 1; a <= 100; a++){
// If number div 15 has % 0 print Fizzbuzz
			if (a % 15 == 0){
				console.log("Fizzbuzz");
// If number div 3 has % 0 print Fizz
			}else if (a % 3 == 0){
				console.log("Fizz")
// If number div 5 has % 0 print Buzz
			}else if (a % 5 == 0){
				console.log("Buzz")
// If nothing else is met, just print the number
			}else{
				console.log(a)
			}
// End for loop
		}
// End Click
	});
// End Document
});