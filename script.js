const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const start = document.getElementById("start");
const reset = document.getElementById("reset");

let interval = null;
let total = 0;
let totalValue = () => {
	total =
		Number(hour.value) * 3600 +
		Number(minute.value) * 60 +
		Number(second.value);
};

let Timer = () => {
	totalValue();
	total--;
	if (total >= 0) {
		var hr = Math.floor(total / 3600);
		var mt = Math.floor(total / 60 - hr * 60);
		var sc = total - (hr * 3600 + mt * 60);
		hour.value = hr;
		minute.value = mt;
		second.value = sc;
	}
};

start.addEventListener("click", () => {
	clearInterval(interval);
	interval = setInterval(Timer, 1000);
});

reset.addEventListener("click", () => {
	clearInterval(interval);
	hour.value = "";
	minute.value = "";
	second.value = "";
});
