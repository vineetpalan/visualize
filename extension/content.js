var currentURL = document.URL;

var s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
document.head.appendChild(s);

if(currentURL.indexOf('leetcode.com/problems') != -1)
{

	var pull_right = document.evaluate('/html/body/div[1]/div[5]/div[3]/div/div[2]/div' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
	var visualize_button = document.createElement('span');
	visualize_button.innerHTML = '<span id="visualize"  class="btn btn-default btn-pad ng-isolate-scope"> Visualize </span>';
	var runButton = document.getElementById('button0');
	pull_right.insertBefore(visualize_button, runButton);

}
else
{
	if(currentURL.indexOf('ideone.com') != -1)
	{
		var saveButton = document.getElementById('view_edit_save');
		var runButton = document.getElementById('Submit');

		var visualizeButton = document.createElement('span');
		visualizeButton.innerHTML = '<input style="display: inline" type="submit" class="btn footer-item rel-tooltip" id="visualize" value="Visualize" >';
		
		if (typeof saveButton != 'undefined' )
		{
			var parent = document.evaluate('//*[@id="view_edit_box_inside"]/div[4]/div',document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
			parent.insertBefore(visualizeButton, saveButton);
		}
		if (typeof runButton != 'undefined' && runButton != null)
		{
			var parent = document.evaluate('//*[@id="featured-project-carousel"]/div/div[1]/div/div[1]/div[6]/div/div/div[3]',document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
			parent.insertBefore(visualizeButton, runButton);
		}
		
	}
}