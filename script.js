// Fungsi membuat animasi Love, Kupu-kupu, dan Bunga berguguran
function buatEfekRomantis() {
    const container = document.getElementById('particles');
    
    // Daftar emoji kupu-kupu, hati, dan bunga
    const elemenRomantis = ['🦋', '💖', '❤️', '💝', '✨', '🌸', '🌹', '🌷'];

    setInterval(() => {
        const item = document.createElement('div');
        item.classList.add('romantic-item');
        
        // Pilih simbol acak dari daftar
        item.innerText = elemenRomantis[Math.floor(Math.random() * elemenRomantis.length)];
        
        // Atur posisi horizontal acak dari kiri ke kanan (0vw sampai 100vw)
        item.style.left = Math.random() * 100 + 'vw';
        
        // Atur ukuran acak agar ada efek dimensi (jauh & dekat)
        item.style.fontSize = Math.random() * 15 + 12 + 'px';
        
        // Atur durasi jatuh acak supaya tidak kaku (antara 4 sampai 8 detik)
        const duration = Math.random() * 4 + 4;
        item.style.animationDuration = duration + 's';
        
        // Memberikan sedikit efek transparansi acak
        item.style.opacity = Math.random() * 0.4 + 0.6;

        container.appendChild(item);

        // Hapus elemen setelah selesai jatuh ke bawah
        setTimeout(() => {
            item.remove();
        }, duration * 1000);

    }, 250); // Muncul setiap 250ms
}

// JALANKAN EFEK LANGSUNG SAAT HALAMAN DIBUKA (Agar di bagian kado sudah ada bunga & kupu-kupu)
window.onload = function() {
    buatEfekRomantis();
};

// Fungsi ketika kotak kado diklik
function bukaKado() {
    const giftOverlay = document.getElementById('gift-overlay');
    const mainContent = document.getElementById('main-content');
    const music = document.getElementById('bg-music');

    // 1. Putar Musik Latar Belakang
    music.play().catch(error => {
        console.log("Autoplay musik dicegah oleh browser.");
    });

    // 2. Sembunyikan Kotak Kado
    giftOverlay.style.opacity = '0';
    giftOverlay.style.visibility = 'hidden';

    // 3. Munculkan Konten Utama Website
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in');
}