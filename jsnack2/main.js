//variabili
let cubo;
let numero;

//variabili per stampare il risultato
let risultato = document.getElementById('cubi');
let n = document.getElementById('numero');

//variabili per poter aggiungere gli eventi d'ascolto
let buttonInsert = document.getElementById("Insert");
let buttonReset = document.getElementById("Reset");

//evento di click per inserire un numero
buttonInsert.addEventListener('click',
    function() {
        
        //reset del risultato nel caso in cui non venga premuto il reset prima di un nuovo calcolo
        risultato.innerHTML = "";

        do{
            numero = parseInt(prompt("Inserisci un numero"))
        }while(isNaN(numero) || numero < 0 )
        n.innerHTML = numero;
        
        for(let i = 1; i <= numero; i++){
            cubo = i * i * i;
            risultato.innerHTML += cubo + " ";
        } 

    const htmlEsito = document.getElementById('esito');
    htmlEsito.classList.remove('d-none');
    }
);

//evento di click per il reset
buttonReset.addEventListener('click',
    function() {
        const htmlEsito = document.getElementById('esito');
        htmlEsito.classList.add('d-none');
        risultato.innerHTML = "";
    }
);
