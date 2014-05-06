/*
	Share e621 images to Google+, only direct links and no
	image embedding self. This is a Google issue.
	Uses jQuery and stuff, so keep yourself to those copyrights.

	Abandonware tho!
*/

// $('head').append('<meta property=\"og:title" content=\"imgur: the simple image sharer\">');
// $('head').append('<meta property=\"og:image" content=\"' + url + '\">');
// $('head').append('<meta property=\"og:type" content=\"article\">');

var url = $("a:contains('Download')").attr("href");

$("h4").append("| <span id=\"gplus\">Share to G+</span>");
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
	window.open("https://plus.google.com/share?url=" + url, "Share to G+", "width=500,height=500");
});