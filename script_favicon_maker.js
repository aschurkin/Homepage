document.addEventListener("DOMContentLoaded", function () {
    // 1. Erstelle dynamisch das Link-Element für das Favicon
    let favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.appendChild(favicon);

    // 2. Erstelle ein unsichtbares Canvas-Element zum Zeichnen der Farben
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 32;
    canvas.height = 32;

    // 3. Deine definierten Farben
    const colors = ["#29ADFF", "#FFEC27", "#00E436", "#FF004D"];
    let colorIndex = 0;

    // 4. Funktion, die das Quadrat zeichnet und das Favicon aktualisiert
    function changeFaviconColor() {
        if (context && favicon) {
            // Quadrat mit der aktuellen Farbe füllen
            context.fillStyle = colors[colorIndex];
            context.fillRect(0, 0, 32, 32);

            // Canvas in ein Daten-Format (Data-URL) umwandeln und dem Favicon zuweisen
            favicon.href = canvas.toDataURL("image/png");

            // Zum nächsten Index wechseln (Endlosschleife)
            colorIndex = colorIndex + 1;
            if (colorIndex >= colors.length) {
                colorIndex = 0;
            }
        }
    }

    // 5. Intervall starten: Alle 500 Millisekunden (halbe Sekunde) die Farbe wechseln
    setInterval(changeFaviconColor, 500);
});
