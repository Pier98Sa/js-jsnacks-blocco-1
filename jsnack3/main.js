//variabile dei button
let buttonScopri = document.getElementById("Scopri");
let buttonReset = document.getElementById("Reset");

//variabile per stampare il risultato
let somma = document.getElementById("somma");
let media = document.getElementById("media");

//evento di click per stampare il risultato
buttonScopri.addEventListener('click',
    function() {
        let risultatoSomma = 0;
        for(let i = 1; i <= 10; i++){
            risultatoSomma = risultatoSomma + i;
        }
        //stampa della somma
        somma.innerHTML = risultatoSomma;

        //calcolo della media
        risultatoMedia = risultatoSomma / 10;
        media.innerHTML = risultatoMedia;

        //stampa della media
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
