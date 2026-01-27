// 1. DATA SUMBER (Ubah di sini saja)
const CONFIG = {
    brandName: "HAJIKU",
    slogan: "Harga Jual Murah Kawanku",
    whatsapp: "6282157925660",
    instagram: "@12e.epilogue",
    eventDate: "Tanggal 6",
    showPromo: true, // Ubah jadi false untuk sembunyiin promo
    promoText: "🎉 Giveaway 5 orang tercepat di stand & 5 orang beruntung sistem guncang!"
};

const menuData = [
    { id: 1, nama: "Nasi Bakar + Es Hulk", harga: "15K", tipe: "paket", hot: true },
    { id: 2, nama: "Nasi Bakar", harga: "12K", tipe: "satuan", hot: false },
    { id: 3, nama: "Es Hulk / Es Hijau", harga: "6K", tipe: "satuan", hot: false },
    { id: 4, nama: "Pentol Mercon Box (12 pcs)", harga: "8K", tipe: "satuan", hot: true },
    { id: 5, nama: "Ceker Mercon Box (6 pcs)", harga: "12K", tipe: "satuan", hot: true }
];

// 2. FUNGSI RENDER (LOGIC)
function initApp() {
    // Set Info Brand
    document.getElementById('brand-name').innerText = CONFIG.brandName;
    document.getElementById('brand-slogan').innerText = CONFIG.slogan;
    document.getElementById('main-wa-btn').href = `https://wa.me/${CONFIG.whatsapp}`;
    document.getElementById('event-info').innerText = `📅 Event : ${CONFIG.eventDate}`;
    document.getElementById('wa-display').innerText = CONFIG.whatsapp;
    document.getElementById('ig-display').innerText = CONFIG.instagram;

    // Promo Logic
    if (CONFIG.showPromo) {
        document.getElementById('promo-container').innerHTML = `
            <div class="promo-card">${CONFIG.promoText}</div>
        `;
    }

    // Menu Logic
    const paketContainer = document.getElementById('paket-container');
    const menuContainer = document.getElementById('menu-container');

    menuData.forEach(item => {
        const card = createMenuCard(item);
        if (item.tipe === 'paket') {
            paketContainer.appendChild(card);
        } else {
            menuContainer.appendChild(card);
        }
    });
}

function createMenuCard(item) {
    const a = document.createElement('a');
    a.className = 'menu-card';
    
    // Auto generate pesan WhatsApp
    const pesan = `Halo kaka, saya mau pesan ${item.nama}.\nNama:\nKelas:`;
    const encodedPesan = encodeURIComponent(pesan);
    a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodedPesan}`;

    a.innerHTML = `
        <div class="menu-info">
            <h3>${item.hot ? '🔥 ' : ''}${item.nama}</h3>
        </div>
        <div class="menu-price">${item.harga}</div>
    `;
    
    return a;
}

// Jalankan saat halaman load
document.addEventListener('DOMContentLoaded', initApp);