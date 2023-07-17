let currentNb = 0;

let compteurNumber = document.getElementById('nb-compteur');
let compteurNumberAdd = document.getElementById('btn-add');
let compteurNumberRemove = document.getElementById('btn-remove');


compteurNumberAdd.addEventListener('click', function() {
    currentNb++;
    updateNumber()
})
compteurNumberRemove.addEventListener('click', function() {
    currentNb--;
    updateNumber()
})


function updateNumber(){
    compteurNumber.textContent = currentNb
}