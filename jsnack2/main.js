let cubo;
let numero;

let risultato = document.getElementById('cubi');
let n = document.getElementById('numero');

let buttonInsert = document.getElementById("Insert");
let buttonReset = document.getElementById("Reset");

buttonInsert.addEventListener('click',
    function() {
        do{
            numero = parseInt(prompt("Inserisci un numero"))
        }while(isNaN(numero))
        n.innerHTML = numero;
        
        for(let i = 1; i <= numero; i++){
            cubo = i * i;
            risultato.innerHTML += cubo + " ";

    }
    const htmlEsito = document.getElementById('esito');
    htmlEsito.classList.remove('d-none');
}
);

buttonReset.addEventListener('click',
    function() {
        const htmlEsito = document.getElementById('esito');
        htmlEsito.classList.add('d-none');
        risultato.innerHTML = "";
    }
);
