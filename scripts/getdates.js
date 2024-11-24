const footer = document.querySelector("footer");

const today = new Date();
footer.innerHTML = `<p>
            <span id="currentyear">©${today.getFullYear()}</span> - Angel Clavo Ormeño - Peru
        </p>
        <p>
            Last Modification: ${document.lastModified}
        </p>`;