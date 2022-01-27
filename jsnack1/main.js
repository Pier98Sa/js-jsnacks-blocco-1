//variabile dei button
let buttonInsert = document.getElementById("Insert");
let buttonReset = document.getElementById("Reset");

//variabile per stampare il risultato
let risultato = document.getElementById("risultato");

//evento di click per stampare il risultato
buttonInsert.addEventListener('click',
    function() {
        let somma = 0;
        for(let i = 0; i < 10; i++){
            let numero = parseInt(prompt("Inserisci un numero"));
            while(isNaN(numero)){
                alert("il dato inserito non è un numero");
                numero = parseInt(prompt("Inserisci un numero"))
            }
            somma = somma + numero;
        }
        risultato.innerHTML = somma

        const htmlEsito = document.getElementById('esito');
        htmlEsito.classList.remove('d-none');
    }
);

// evento di click per cancellare il risultato stampato
buttonReset.addEventListener('click',
    function() {
        const htmlEsito = document.getElementById('esito');
        htmlEsito.classList.add('d-none');
    }
);



