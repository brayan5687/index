document.getElementById("si").addEventListener("click", function() {
    document.getElementById("respuesta").innerHTML = "¡Me alegra saber que sientes lo mismo!";
    document.getElementById("carita").innerHTML = " 🙂 ";
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("respuesta").innerHTML = "Entiendo. Espero que podamos seguir siendo amigos.";
    document.getElementById("carita").innerHTML = " ☹️ ";
});
