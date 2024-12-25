// script.js
function showSection(sectionId) {
    // Ambil semua elemen dengan class 'section'
    const sections = document.querySelectorAll('.section');

    // Sembunyikan semua section
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).style.display = 'block';
}
