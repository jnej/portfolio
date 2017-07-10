$(document).ready(function () {
  $("#contact-btn").click(function(event) {
    $(".contact-info").toggle();
    event.preventDefault();
});

		$("#makeMeScrollable").smoothDivScroll({
			mousewheelScrolling: "allDirections",
			manualContinuousScrolling: true,
			autoScrollingMode: "onStart"
		});

	});
