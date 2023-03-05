let fullProjetLink = document.querySelector('#full')
let webProjetLink = document.querySelector('#web')
let mobileProjetLink = document.querySelector('#mobile')
let fullProjet = document.querySelector('#fullproject')
let webProjet = document.querySelector('#webprojet')
let mobileProjet = document.querySelector('#mobileprojet')


fullProjetLink.addEventListener(('click'),()=>{
    fullProjet.classList.add('animate')
    mobileProjet.classList.remove('d-none','animate')
    webProjet.classList.remove('d-none','animate')
    
})
webProjetLink.addEventListener(('click'),()=>{
    fullProjet.classList.remove('animate')
    mobileProjet.classList.add('d-none')
    mobileProjet.classList.remove('animate')
    webProjet.classList.remove('d-none')
    webProjet.classList.add('animate')
})
mobileProjetLink.addEventListener(('click'),()=>{
    fullProjet.classList.remove('animate')
    mobileProjet.classList.remove('d-none')
    mobileProjet.classList.add('animate')
    webProjet.classList.add('d-none')
    webProjet.classList.remove('animate')
})