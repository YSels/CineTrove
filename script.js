// 1. We zoeken de knoppen en het menu op in de HTML
const openBtn = document.getElementById('open-add-btn');
const closeBtn = document.getElementById('close-modal-btn');
const modal = document.getElementById('add-modal');

// 2. Als we op de knop in de header klikken, laat het menu zien
openBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

// 3. Als we op Cancel klikken, verstop het menu weer
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});