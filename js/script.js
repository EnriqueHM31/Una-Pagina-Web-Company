const containerIconoMenu = document.getElementById("icono_menu")
const containerCerrarMenu = document.getElementById("container_cerrar-menu")
const menu = document.getElementById("menu")

/* ******************** ICONO MENU FUNCIONAMIENTO ******************** */
containerIconoMenu.addEventListener("click", () => {

    containerIconoMenu.style.display = "none"
    añadirClass(containerCerrarMenu, "aparecer")
    añadirClass(menu, "aparecer")
    ponerAnimacion(menu, "desplazarMenu", "1s", "linear", "")
})

containerCerrarMenu.addEventListener("click", () => {
    containerIconoMenu.style.display = "flex"
    removeClass(containerCerrarMenu, "aparecer")
    removeClass(menu, "aparecer")
})
/* ******************** LIKE DE LOS CARDS ********************    */
const likeCards = document.querySelectorAll(".like_card")

likeCards.forEach(element => {

    element.addEventListener("click", () => {

        const colorActual = getComputedStyle(element).backgroundColor

        if (colorActual === "rgba(0, 0, 0, 0)") {
            ponerBackground(element, "#48e")
        } else {
            ponerBackground(element, "rgba(0, 0, 0, 0)")
        }
    })
});
/* ******************** ACCIONES PARA LA GALERIA AL DAR CLICK ******************** */
const imgAlbum = document.querySelectorAll(".img_album")

imgAlbum.forEach(element => {

    element.addEventListener("click", () => {

        const tieneTransform = getComputedStyle(element).transform
        const tieneBoxShadow = getComputedStyle(element).boxShadow

        if (tieneTransform === "none" && tieneBoxShadow === "none") {
            ponerTransform(element, "scale(.8)")
            ponerBoxShadow(element, "0 0 2rem var(--colorwhite)")
        }else{
            ponerTransform(element, "none")
            ponerBoxShadow(element, "none")
        }
    })
});
