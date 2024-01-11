const numeroCasuale = document.getElementById('lancioDelDado')
const risultato =document.getElementById('primoRisultato')
const risultatoDue=document.getElementById('secondoRisultato')
const vittoria=document.getElementById('vincitore')
function casuale(min, max){
    min=1
    max=6
    return Math.floor(Math.random() * (max - min + 1)) + min
}
numeroCasuale.addEventListener ('click',  function(){
    let risultato = casuale()
    document.getElementById('primoRisultato').innerHTML=risultato
    let risultatoDue=casuale()
    document.getElementById('secondoRisultato').innerHTML=risultatoDue
    if (risultato>risultatoDue){
        document.getElementById('vincitore').innerHTML="vince il giocatore 1"
    }else if(risultatoDue>risultato){
        document.getElementById('vincitore').innerHTML="vince il giocatore 2"
    }else{
        document.getElementById('vincitore').innerHTML="pareggio!"
    }
})


// email richiesta all'utente

const messaggioControllo=document.getElementById('messaggioDiControllo')
const btnControllo=document.getElementById('controllo')
const emailArray=[
    "gianlucalodi@gmail.com",
    "francescorossi@gmail.com",
    "albertopiccirilli@gmail.com",
    "alessandroproli@gmail.it",
    "luca.grossi@libero.it",
]
btnControllo.addEventListener('click', function (){
    let emailUtente=document.getElementById('email').value
    let controllo=false
     for (i=0 ; i<emailArray.length ; i++){
        
         if (  emailArray[i] === emailUtente ){
             controllo=true
         }     
         if (controllo){
             messaggioControllo.innerHTML=("puoi accedere")
         }else{
             messaggioControllo.innerHTML=("email errata non puoi accedere")
         }
     }
 })
