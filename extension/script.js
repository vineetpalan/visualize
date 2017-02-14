
$('#visualize').on('click', function()
{
	var code = document.getElementById('codearea').innerHTML;

	var publicvar = "public ";
	var main_method = '';
	var main_added = false;
	if( code.indexOf('public class')==-1)
	{
		code = 'public ' + code; 
	}
 	if(currentURL.indexOf('leetcode.com') && (code.indexOf('main (String')==-1 ||  code.indexOf('main(String')==-1 ))
	{
		main_added = true;
		main_method = '%20%20%20%20public%20static%20void%20main(String%20args%5B%5D)%20%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20create%20class%20object%20and%20call%20the%20original%20method%20with%20proper%20inputs%0A%20%20%20%20%7D%0A%7D';
	}
	code = encodeURIComponent(code);
	code = code.substring(0,code.lastIndexOf("%7D"));
	code = code + main_method;
	var extra = '&cumulative=false&curInstr=0&heapPrimitives=false&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=%5B%5D&textReferences=false';
	if (main_added == true)
	{
		extra = '';
	}
	var newURL = "http://www.pythontutor.com/visualize.html#code=" + code + extra;
	console.log(newURL);
	window.open(newURL, '_blank');

});
