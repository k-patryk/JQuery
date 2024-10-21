$(document).ready(function () {
	$("#count-sum").click(function () {
		let suma = 0;

		$("#employees .salary").each(function () {
			suma += parseFloat($(this).text());
		});
		$("#sum").text(suma);
	});
});
