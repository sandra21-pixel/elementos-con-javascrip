const w=window;
const d=document;

const main= d.querySelector('main')
const h2= d.querySelector('h2')
const a= d.querySelector('a')
const p= d.querySelectorAll('p')

const nombre = w.prompt("ingrese su nombre")

// pregunta por el nombre y agraga uppercase
if(nombre){
    h2.innerHTML=`Bienvenido ${nombre}`
    h2.style.textTransform="uppercase"
}else{
    h2.innerHTML="INVITADO"
    h2.style.textTransform="uppercase"
}
//cambia de color al texto de A
a.style.color="#E51B3E"

// pregunta para colocar el fondo de pantalla
const fondo = w.confirm("Desea colocar un fondo de pantalla?")

if(fondo){
    const body = d.querySelector('body')
    body.classList.add('fondo')
}

// agraga clases para o impar
for(let i=0;i<p.length;i++){
    if(i%2==0){
        p[i].classList.add('destacadoPar')
    }else{
        p[i].classList.add('destacadoImpar')
    }
}

// establece el display al fondo
main.style.display='block'