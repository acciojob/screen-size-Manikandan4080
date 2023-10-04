function updateSize(){
	let cont = document.getElementById("cont");
	let width = window.innerWidth|| document.documentElement.clientWidth || document.body.clientWidth;
	let height = window.innerHeight|| document.documentElement.clientHeight || document.body.clientHeight;

	cont.textContent = `Width : ${width} Height : ${height}`;
}
updateSize();
window.addEventListener('resize', updateSize);