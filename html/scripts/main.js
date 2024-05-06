let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/firefox_png.webp") {
    miImage.setAttribute("src", "images/descarga.jpg");
  } else {
    miImage.setAttribute("src", "images/firefox_png.webp");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");



function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
  }
}


if (!localStorage.getItem("name")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("name");
  miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};
