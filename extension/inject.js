$( document ).ready(function() 
{
	var currentURL = document.URL;
	if (currentURL.indexOf('leetcode.com') !=-1)
	{
		var aceEditor = document.evaluate('/html/body/div[1]/div[5]/div[2]/div/div/div/div',document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
		aceEditor.id = 'file_div';
	}
	var editor = ace.edit('file_div');
	var codearea = document.createElement("textarea");
	codearea.name = "codearea";
	codearea.id = "codearea";
	codearea.innerHTML = editor.getSession().getValue();
  	codearea.style="display:none;"

  	document.body.appendChild(codearea);

	var textarea = document.getElementById('codearea');
	editor.on("onchange", function() {
	    textarea.innerHTML = editor.getSession().getValue();
	});
});