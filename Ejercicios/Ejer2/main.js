console.log("hola")
botonCrear.addEventListener('click', crear)

function crear(event){

    event.preventDefault()
    const nombre= document.querySelector('#name')
    const apellido1= document.querySelector('#apellido1')
    const apellido2= document.querySelector('#apellido2')
    const DNI= document.querySelector('#DNI')

    const nombreCarta= document.querySelector('#nombreCarta')
    const apellido1Carta= document.querySelector('#apellidoCarta')
    const apellido2Carta= document.querySelector('#apellido2Carta')
    const DNICarta= document.querySelector('#DNICarta')

    const nombreF= nombre.value
    const apellido1F= apellido1.value
    const apellido2F= apellido2.value
    const dniF= DNI.value
    
    nombreCarta.innerHTML=nombreF
    apellido1Carta.innerHTML=apellido1F
    apellido2Carta.innerHTML=apellido2F
    DNICarta.innerHTML=dniF

    console.log("Adios")
    
}