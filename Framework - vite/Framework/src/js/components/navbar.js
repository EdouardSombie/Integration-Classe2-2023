/* script du composant navbar */
window.addEventListener("load", () => {
	document.querySelectorAll(".navbar_toggle_button").forEach((elem) => {
		console.log(elem);
		elem.onclick = () => {
			const targetName = elem.getAttribute("data-target");
			document.querySelector(targetName).classList.toggle("toggled");
		};
	});
});
