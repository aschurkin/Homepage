document.addEventListener("DOMContentLoaded", function () {
    const allTiles = document.querySelectorAll(".image_box");
    
    allTiles.forEach(function (tile, indexA) { // indexA hinzugefügt, um den Index des aktuellen Elements zu speichern
        tile.addEventListener("mouseover", function () {
            // Element A (das gehoverte Element, das verschoben werden soll)
            const fakeTile = this.querySelector(".js_fake_tile"); 
            const currentPosition = fakeTile?.closest(".image_box"); // .closest wird auch funktionieren
            
            if (currentPosition) { 
                let randomIndex;
                let newPosition;
                
                // Schleife, die so lange läuft, bis ein ZIEL-Element (newPosition) 
                // gefunden wurde, das NICHT das aktuelle gehoverte Element (currentPosition) ist.
                // Da newPosition über den randomIndex ermittelt wird, muss der randomIndex
                // vom Index des currentPosition-Elements verschieden sein (indexA).
                do {
                    randomIndex = Math.floor(Math.random() * allTiles.length);
                    newPosition = allTiles[randomIndex];
                } 
                while (randomIndex === indexA);
                
                
                const parent = currentPosition.parentNode;
                
                if (parent) {
                    // 1. Speichere das Element, das direkt NACH Element B kommt
                    const afterB = newPosition.nextSibling;
                    
                    // 2. Füge Element B vor Element A ein
                    parent.insertBefore(newPosition, currentPosition);
                    
                    // 3. Füge Element A an die ursprüngliche Position von Element B ein
                    parent.insertBefore(currentPosition, afterB);
                }

            }
        });
    });
});
