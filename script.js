console.log('JS OK!');

//Visualizzare in pagina (o in console) 5 numeri casuali

const arrayNumeriDaIndovinare = []; //array in cui memorizzare i numeri generati random e che l'utente dovrà indovinare
for(let i = 0; i < 5; i++)
{
    console.log(Math.floor(Math.random() * 10) + 1);    //stampo in console 5 numeri generati random nel range [1,10] che sarebbero i numeri da indovinare da parte dell'utente
    arrayNumeriDaIndovinare.push(Math.floor(Math.random() * 10) + 1);
}

//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
setTimeout(inserisciNumero,30000);  //dopo i 30 secondi richiamo la funzione per far inserire da parte dell'utente un numero

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

    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti dei numeri da indovinare sono stati individuati
    let numeriIndovinatiDallUtente = 0;
    /*for(let i = 0; i < arrayNumeriUtente.length; i++)
    {
        if(arrayNumeriUtente [i] == )
    }*/
}