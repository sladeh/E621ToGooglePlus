/*
* Share e621 images to Google+, only direct links and no
* image embedding self. This is a Google issue.
*
* Copyright suck my dick.
* Follow me at: https://plus.google.com/111574610177008585768/posts :^)
*/

var url = $("a:contains('Download')").attr("href");

$("h4").append("| <div id=\"replaceme\"></div>");
$("#replaceme").replaceWith("<span id=\"gplus\">Share to G+</span>");
$("#gplus").css({
				"cursor": "pointer",
				"color": "#b4c7d9"
				});

$("#gplus").on("mouseenter", function() {
	$(this).css("color", "#2e76b4");
})
.on("mouseleave", function() {
	$(this).css("color", "#b4c7d9");
});

$("#gplus").click(function() {
	$("#gplus").replaceWith("<span id=\"sharing\">Sharing...</span>");
	$("#sharing").append("<img src=" + chrome.extension.getURL("ajax-loader.gif") + " />");
	chrome.extension.sendRequest({method: 'PlusAPI', data: {service: 'Plus', method: 'init'}}, function(initResponse) {
		console.log(initResponse);
		chrome.extension.sendRequest({method: 'PlusAPI', data: {service: 'plus', method: 'newPost', content: 'test'}}, function(postResponse) {
			if(postResponse !== false) {
				$("#sharing").replaceWith("<span id=\"success\">Shared to G+!</span>");
			} else if (postResponse == false) {
				$("#sharing").replaceWith("<span id=\"failure\">Oops, something went wrong!</span>");
			}
			console.log(postResponse);
		});
	});
});
