document.addEventListener("DOMContentLoaded", function() {
    // Öffnen und Schließen eine Dialog-Elements und deaktivieren/aktivieren der Scroll-Funktion
    let allImageContainer = document.querySelectorAll(".image_container");
   
    allImageContainer.forEach(function(container) {
        container.addEventListener("click", function(event) {
            // Neues Dialog-Element erstellen
            let newDialogElement = document.createElement("dialog");
            
            // Neues Button-Element erstellen, Klasse geben und auch ein HTML-Entity für "X"
            let newCloseButtonmElement = document.createElement("button");
            newCloseButtonmElement.classList.add("close_button");
            newCloseButtonmElement.innerHTML = "&#10005;";

            // Innerhalb des Containers gibt es ein img-Tag. Das kann man klonen. 
            let copiedChildElement = this.firstElementChild.cloneNode(true);

            // Am Ende alles zusammenführen. Dialog in den Container. Geklontes Img-Element und Button in das Dialog-Element.
            this.appendChild(newDialogElement);
            newDialogElement.appendChild(copiedChildElement);
            newDialogElement.appendChild(newCloseButtonmElement);
       
            // Event-Handler auf alle Close-Buttons. Das Element wird aber nicht einfach geschlossen sondern aus dem DOM entfernt.
            let allCloseModalButtons = document.querySelectorAll(".close_button");
            allCloseModalButtons.forEach(function(closeButton) {
                closeButton.addEventListener("click", function(event) {
                    event.stopPropagation();
                    // this.closest("dialog[open]").close();
                    this.closest("dialog[open]").remove();
                    enableScroll();
                });
            });

            // Prüfen ob ein Dialog-Element schon offen ist. Wenn noch keins offen ist, dann Dialog-Element öffnen.
            let dialogOpen = document.querySelector("dialog[open]");
            if (dialogOpen) {
                return
            } 
            else {
                newDialogElement.showModal();
                disableScroll();
                
                // Listener für das Close-Event, der nach dem Auslösen entfernt wird und wenn das Bild erneut angezeigt wird, dann Aneu hinzugefügt
                newDialogElement.addEventListener("close", function() {
                    enableScroll();
                }, { once: true }); 
            }
        });
    });

    // Funktionen zum Scrollen (blockieren/erlauben)
    function disableScroll() {
        document.body.classList.remove("overflow_auto");
        document.body.classList.add("overflow_hidden");
    }
    function enableScroll() {
        document.body.classList.remove("overflow_hidden");
        document.body.classList.add("overflow_auto");
    }
});
