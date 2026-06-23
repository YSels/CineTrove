// knoppen ophalen in de html
const openBtn = document.getElementById('open-add-btn');
const closeBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('add-modal');

// knop header interactie openen
openBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// knop header interactie sluiten
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});