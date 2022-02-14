const $form  = document.querySelector('#form')
const $buttonmailto = document.querySelector('#envio')
$form.addEventListener('submit',handleSubmit)


function handleSubmit(event){
    event.preventDefault()
    const form = new  FormData(this)
    console.log(form.get('nombres'))
    $buttonmailto.setAttribute('href', `mailto:vegajoseluis322@gmail.com?subject= Contacto Pagina Web  &body= Nombre :${form.get('nombres')}\n\r Correo:${form.get('correo')}
     ${form.get('mensaje')}`)
    $buttonmailto.click()
}