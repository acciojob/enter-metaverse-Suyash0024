document.addEventListener("DOMContentLoaded", () => {
      const statusPara = document.getElementById("status");
      const enterButton = document.getElementById("enterBtn");

      enterButton.addEventListener("click", () => {
        statusPara.innerHTML = "<h1>Entered Metaverse</h1>";
      });
    });