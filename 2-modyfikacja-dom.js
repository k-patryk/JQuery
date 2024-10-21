$(document).ready(function () {
	for (let i = 1; i <= 5; i++) {
		$("#paragraphs").append(`<p>paragraf ${i}</p>`);
	}

	$("#moveToTop").click(function () {
		let lastParagraph = $("#paragraphs p").last();
		lastParagraph.prependTo("#paragraphs");
	});

	$("#moveToBottom").click(function () {
		let firstParagraph = $("#paragraphs p").first();
		firstParagraph.appendTo("#paragraphs");
	});
});
