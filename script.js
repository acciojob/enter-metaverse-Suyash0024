document.addEventListener("DOMContentLoaded", () => {
      const statusPara = document.getElementById("status");
      const enterButton = document.getElementById("enterBtn");

      enterButton.addEventListener("click", () => {
        // This will change the entire paragraph to a new <h1 id="status"> element
        const h1 = document.createElement("h1");
        h1.id = "status";
        h1.innerText = "Entered Metaverse";
        statusPara.replaceWith(h1);
      });
    });