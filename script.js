//your JS code here. If required.
const statusPara = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click", function () {
	statusPara.outerHtml = "<h1 id="status">Entered Metaverse</h1>";
	
})