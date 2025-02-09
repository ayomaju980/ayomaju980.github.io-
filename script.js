const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    scrollposition = window.scrollY;

    if (scrollposition >= 60){
        nav.classList.add('nav-dark');
    }else if (scrollposition <= 60){
        nav.classList.remove('nav-dark')
    }
})

document.addEventListener('contextmenu', event => event.preventDefault());

const lightModeBtn = document.getElementById('lightMode');
const darkModeBtn = document.getElementById('darkMode');
const autoModeBtn = document.getElementById('autoMode');

// Fungsi untuk menyimpan tema ke localStorage
function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
}

// Event Listener untuk mode terang
lightModeBtn.addEventListener('click', () => setTheme('light'));

// Event Listener untuk mode gelap
darkModeBtn.addEventListener('click', () => setTheme('dark'));

// Event Listener untuk mode otomatis (mengikuti sistem)
autoModeBtn.addEventListener('click', () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? 'dark' : 'light');
});

// Cek dan terapkan tema saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
});

// script.js
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Menambahkan angka 0 di depan untuk angka satu digit
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    const timeString = hours + ':' + minutes + ':' + seconds;

    // Menampilkan waktu pada elemen dengan id 'clock'
    document.getElementById('clock').textContent = timeString;
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);

// Memanggil updateClock sekali agar jam muncul segera setelah halaman dimuat
updateClock();


 document.getElementById("year").textContent = new Date().getFullYear();