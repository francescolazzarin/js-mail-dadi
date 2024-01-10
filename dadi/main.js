const numeroCasuale = document.getElementById('lancioDelDado')
const risultatoPrimoGiocatore =document.getElementById('primoRisultato')
const risultatoSecondoGiocatore=document.getElementById('secondoRisultato')
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