const menuDiv = document.getElementById('links-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar)

function animar(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativar')
}                