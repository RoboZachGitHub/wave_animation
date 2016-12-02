// line 2 ensures that the Javascript is not run until the *.html DOM has been pre-loaded. VERY IMPORTANT
document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    // your code here.


	var canvas = document.getElementById("c"),
	context = canvas.getContext("2d");

	context.fillStyle = 'blue';
	context.fillRect(10, 20, 200, 100);

}