let fullProjetLink = document.querySelector('#full')
let webProjetLink = document.querySelector('#web')
let mobileProjetLink = document.querySelector('#mobile')
let webProjet = document.querySelector('#webprojet')
let mobileProjet = document.querySelector('#mobileprojet')

fullProjetLink.addEventListener(('click'),()=>{
    mobileProjet.classList.remove('d-none')
    webProjet.classList.remove('d-none')
})
webProjetLink.addEventListener(('click'),()=>{
    mobileProjet.classList.add('d-none')
    webProjet.classList.remove('d-none')
})
mobileProjetLink.addEventListener(('click'),()=>{
    mobileProjet.classList.remove('d-none')
    webProjet.classList.add('d-none')
})