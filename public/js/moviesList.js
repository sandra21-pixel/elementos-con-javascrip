const w=window;
const d=document;

const body = d.querySelector('body')
const h1 = d.querySelector('h1')

const oscuro = w.confirm("Desea modo oscuro?")

if(oscuro){
    body.style.backgroundColor='#7f7f7f'
    body.classList.add('fondoMoviesList')
}

h1.innerHTML="LISTADO DE PELICULAS"
h1.style.color='white'
h1.style.backgroundColor='teal'
h1.style.padding='20px'