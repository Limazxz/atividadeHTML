trocaTema = () => {
    //  const html = document.documentElement;

    //  document.querySelector("body").style.background = "pink"

     document.documentElement.classList.toggle("light");

     const isLight = document.documentElement.classList.contains("light");

     const imagem = isLight ? "./img/profile.png" : "./img/profileDark.png";

     document.querySelector("#profile img").setAttribute("src", imagem);

     const trocarAlt = isLight ? "foto de costas mostrando um corte de cabelo" :
    "slfie de um garoto com filtro no instagram";

    document.querySelector("#profile img").setAttribute("alt", trocarAlt)
}