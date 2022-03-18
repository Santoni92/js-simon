console.log('JS OK!');

//Visualizzare in pagina (o in console) 5 numeri casuali

const arrayNumeriDaIndovinare = []; //array in cui memorizzare i numeri generati random e che l'utente dovrà indovinare
for(let i = 0; i < 5; i++)
{
    console.log(Math.floor(Math.random() * 10) + 1);    //stampo in console 5 numeri generati random nel range [1,10] che sarebbero i numeri da indovinare da parte dell'utente
    arrayNumeriDaIndovinare.push(Math.floor(Math.random() * 10) + 1);
}

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
setTimeout(inserisciNumero,3000);  //dopo i 30 secondi richiamo la funzione per far inserire da parte dell'utente un numero



function inserisciNumero()
{
    const arrayNumeriUtente = [];   //inizializzo un array vuoto che sarà destinato a contenere i cinque numeri inseriti dall'utente
    for(let i = 0; i < 5; i++)
    {
        let numeroInseritoDallUtente = parseInt(prompt('Inserisci numero: '));
        while(isNaN(numeroInseritoDallUtente))  //rifaccio la richiesta di inserimento numero da parte dell'utente finché quest'ultimo non inserisce un numero
        {
            numeroInseritoDallUtente = parseInt(prompt('Inserisci numero: '));
        }
        arrayNumeriUtente.push(numeroInseritoDallUtente);   //inserisco il numero dato dall'utente nell'array
    }
    console.log(arrayNumeriUtente); //stampo in console l'array dei cinque numeri forniti dall'utente

    
    let numeriIndovinatiDallUtente = 0;
    const arrayNumeriIndovinati = [];   //inserirò gli eventuali numeri indovinati dall'utente
    for(let i = 0; i < arrayNumeriDaIndovinare.length; i++)   //ciclo per tutta la lunghezza dell'array dei numeri inseriti
    {
        if(arrayNumeriUtente[i] === arrayNumeriDaIndovinare[i] )    /*se il numero inserito dall'utente presente nella
                                                                     posizione i-esima dell'array è uguale al numero
                                                                     presente nella stessa posizione i-esima nell'array dei
                                                                     nuemeri generati random allora incremento la variabile
                                                                     che tiene il conto di quanti siano i numeri indovinati dall'utente*/
                                                                                                               
            {
                numeriIndovinatiDallUtente++;
                console.log(numeriIndovinatiDallUtente);
                arrayNumeriIndovinati.push(arrayNumeriDaIndovinare[i]);
            }
    }
    console.log('Hai indovinato ' + `${numeriIndovinatiDallUtente}` + " numeri");
    if(numeriIndovinatiDallUtente > 0)
    {
        console.log('I numeri da te indovinati sono' + " " + arrayNumeriIndovinati);
    }
}
/*
CreaArrayNumeriDaIndovianre()
{

}*/