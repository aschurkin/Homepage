function createSnowflake() {
    const snowContainer = document.getElementById("js_snow");
    const flake = document.createElement("div");
    flake.classList.add("snowflake");

    flake.style.left = Math.random() * 100 + "vw";
    flake.style.width = "24px";
    flake.style.height = "24px";
    flake.style.animationDuration = "12s";

    snowContainer.appendChild(flake);
    // Aufräumen, wenn Animation vorbei (sicherer als fester Timeout evtl.):
    setTimeout(function() {
        flake.remove()
    }, parseFloat(flake.style.animationDuration) * 1000 + 1000);
}

setInterval(createSnowflake, 120);
