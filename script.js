console.log("Script Terhubung!");

window.addEventListener('scroll', function() {
    // PANGGIL KEDUA FUNGSI SAAT SCROLL
    reveal();      // Animasi teks (yang sudah kamu buat)
    changeNav();   // Animasi warna Navbar
});

function reveal() {
    var content = document.querySelector('.about-content');
    if (content) {
        var windowHeight = window.innerHeight;
        var elementTop = content.getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            content.classList.add('appear');
            console.log("Animasi Muncul!");
        }
    }
}

// FUNGSI BARU UNTUK NAVIGASI
function changeNav() {
    var myNav = document.querySelector('nav');
    if (window.scrollY > 50) {
        myNav.classList.add('nav-colored');
    } else {
        myNav.classList.remove('nav-colored');
    }
}

// Jalankan saat pertama kali load
reveal();
changeNav();