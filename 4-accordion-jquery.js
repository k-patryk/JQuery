$(document).ready(function () {
	$(".accordion-item").click(function () {
		console.log("klikam");

		/* $(".accordion-content").css("display", "none");
        $(".accordion-content").slideUp(); */
		$(this).find(".accordion-content").slideToggle();
	});
});

/* document.addEventListener("DOMContentLoaded", function () {
	const accordionItems = document.querySelectorAll(".accordion-item");

	accordionItems.forEach(function (item) {
		item.addEventListener("click", function () {
			console.log("klikam");

			const content = this.querySelector(".accordion-content");
			if (content.style.display === "none" || content.style.display === "") {
				content.style.display = "block"; // Show the content
			} else {
				content.style.display = "none"; // Hide the content
			}
		});
	});
});
 */
