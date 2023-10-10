const button  = document.querySelector(".btn-success");
console.log(button);

const saluto = document.getElementById('saluto');

button.addEventListener('click', function(){
    let nome = document.getElementById('nome') .value;
    let km = document.getElementById('km') .value;
    let eta = document.getElementById('eta').value;
    //controlli che l'utente abbia inserito i dati corretti

    if( nome === "" || eta === "" ){
    alert("inserisci due valori validi !")
}
    const twentyPC = 20/100;
    const fortyPC = 40/100;
    const costKm = 0.21;
    const totalCost = costKm * km
    let result; 


    if (eta === 'minorenne') {
        result = totalCost - (totalCost * twentyPC);
        result.toFixed(2);
        } else if (eta === 'over 65') {
            result= totalCost - (totalCost * fortyPC);
            result.toFixed(2);
    } else {
        console.log(totalCost)
        result = totalCost;
        result.toFixed(2);
    }

    saluto.innerHTML = result.toFixed(2);
    
})
    
    
     

    
