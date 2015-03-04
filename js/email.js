
function init()
{
	var s = "ubthedummy";
	var t = window.location.hostname;
	var u = t.replace(/\./, "@");
	t = u.replace(/w/, u.substring(6,12).replace(/[areyoudumb]/g, ""));
	t = t.replace(/w/, s.substr("5"-2, 1));
	t = t.replace(/w/, s.substring(0,2));

	var canvas = document.getElementById("insertaddy");
	var ctx = canvas.getContext("2d");

	ctx.font="16pt Droid Sans Mono";
	ctx.fillText(t, 5, 19);
}
