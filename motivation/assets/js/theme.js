const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./assets/scss/theme.css";

function themeMode(theme) {

    if (theme == "white") {
        document.head.appendChild(link);
    }

    if (theme == "dark"){
        document.head.removeChild(link);
    }
}
