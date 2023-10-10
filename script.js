const button  = document.querySelector(".btn-success");
console.log(button);

button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    //controlli che l'utente abbia inserito i dati corretti
    console.log(nome);
    console.log(eta);
})