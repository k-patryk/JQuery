$(document).ready(function () {
	$("#przycisk").click(function () {
		$("#kwadrat").animate(
			{
				left: "+=100px",
				width: "100px",
				height: "100px",
			},
			3000,
			function () {
				$(this).animate(
					{
						backgroundColor: "blue",
					},
					5000,
					function () {
						$(this)
							.html("<h2>Animacja zakończona</h2>")
							.css("font-size", "12px");
					}
				);
			}
		);
	});
});
