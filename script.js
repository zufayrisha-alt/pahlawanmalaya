// script.js - VERSI MUKTAMAD DENGAN SEMUA PEMBETULAN BADANG.HTML

// --- Fungsi Utiliti ---
// Menukar teks berbaris baharu (new line) kepada senarai <ul>/<li>
function convertNewlineToList(text) {
    const lines = text.trim().split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return '';
    const listItems = lines.map(line => `<li>${line.trim()}</li>`).join('');
    return `<ul class="skill-description-list">${listItems}</ul>`;
}

// Menukar teks Hikayat kepada perenggan <p> (Seperti Badang.html)
function convertHikayatToParagraphs(text) {
    // Pecahkan teks mengikut dua baris baharu (pemisah perenggan)
    const paragraphs = text.trim().split(/\n\s*\n/).filter(p => p.trim() !== '');
    
    // Bungkus setiap perenggan dengan tag <p>
    return paragraphs.map(p => `<p>${p.trim().replace(/\n/g, ' ')}</p>`).join('\n\n');
}


// --- FUNGSI BARU: Logik Butang Kembali ---
// Butang kembali dalam HTML Badang menggunakan href="#". Logik kembali mesti di sini.
document.addEventListener('DOMContentLoaded', () => {
    // Cari semua butang dengan kelas 'left-button' yang TIDAK mempunyai onclick lain
    const backButton = document.querySelector('.nav-button.back-glow.left-button');
    
    // Jika butang kembali ada dan href="#"
    if (backButton && backButton.getAttribute('href') === '#') {
        backButton.addEventListener('click', (e) => {
            e.preventDefault(); // Hentikan link pergi ke atas halaman
            history.back(); // Kembali ke halaman sebelumnya
        });
    }
});


// --- Fungsi Utama Penjanaan Kod ---
function generateHeroCode() {
    // 1. Kumpulkan Data Teks dari Input Editor
    const data = {
        // ... (Kod pengumpulan data kekal sama seperti sebelum ini) ...
        heroNumber: document.getElementById('heroNumber').value.padStart(3, '0'),
        heroName: document.getElementById('heroName').value.toUpperCase(),
        heroRank: document.getElementById('heroRank').value.toUpperCase(),
        heroType: document.getElementById('heroType').value.toUpperCase(),
        heroQuote: document.getElementById('heroQuote').value.replace(/"/g, ''),
        
        heroBgURL: document.getElementById('heroBgURL').value,
        mainHeroImageURL: document.getElementById('mainHeroImageURL').value,

        heroBgURL: document.getElementById('heroBgURL').value,
        mainHeroImageURL: document.getElementById('mainHeroImageURL').value,
        
        // 💡 BARIS TAMBAHAN: Kumpul URL Audio dari borang editor
        heroAudioURL: document.getElementById('heroAudioURL').value, // Pastikan ID ini ada dalam borang editor anda!
        
        // Data Skin Statik
        skin1Name: document.querySelector('.thumbnail-item[data-skin-index="0"]').getAttribute('data-skin-name'),
        skin2Name: document.querySelector('.thumbnail-item[data-skin-index="1"]').getAttribute('data-skin-name'),
        skin1Img1: document.querySelector('.thumbnail-item[data-skin-index="0"]').getAttribute('data-main-img-1'),
        skin1Img2: document.querySelector('.thumbnail-item[data-skin-index="0"]').getAttribute('data-main-img-2'),
        skin1Img3: document.querySelector('.thumbnail-item[data-skin-index="0"]').getAttribute('data-main-img-3'),
        skin2Img1: document.querySelector('.thumbnail-item[data-skin-index="1"]').getAttribute('data-main-img-1'),
        skin2Img2: document.querySelector('.thumbnail-item[data-skin-index="1"]').getAttribute('data-main-img-2'),
        skin2Img3: document.querySelector('.thumbnail-item[data-skin-index="1"]').getAttribute('data-main-img-3'),

        // Statistik
        stats: {
            serangan: document.getElementById('statSeranganScore').value,
            penguasaan: document.getElementById('statPenguasaanScore').value,
            kesukaran: document.getElementById('statKesukaranScore').value,
            kekebalan: document.getElementById('statKekebalanScore').value,
        },
        
        // HP/Mana
        hpBase: document.getElementById('hpBase').value,
        hpBonus: document.getElementById('hpBonus').value,
        manaBase: document.getElementById('manaBase').value,
        manaBonus: document.getElementById('manaBonus').value,
        
        // Biodata Lanjut
        realName: document.getElementById('realName').value,
        heroAge: document.getElementById('heroAge').value,
        makhluk: document.getElementById('makhluk').value,
        bangsa: document.getElementById('bangsa').value,
        negeriAsal: document.getElementById('negeriAsal').value,
        pekerjaan: document.getElementById('pekerjaan').value,
        tinggi: document.getElementById('tinggi').value,
        berat: document.getElementById('berat').value,
        
        // Skills
        pasif: {
            icon: document.querySelector('.skill-item:nth-child(1) img').getAttribute('src'), 
            name: document.getElementById('pasifName').value.toUpperCase(), // Pastikan uppercase
            desc: convertNewlineToList(document.getElementById('pasifDesc').value) 
        },
        skill1: {
            icon: document.querySelector('.skill-item:nth-child(2) img').getAttribute('src'),
            name: document.getElementById('skill1Name').value.toUpperCase(),
            desc: convertNewlineToList(document.getElementById('skill1Desc').value) 
        },
        skill2: {
            icon: document.querySelector('.skill-item:nth-child(3) img').getAttribute('src'),
            name: document.getElementById('skill2Name').value.toUpperCase(),
            desc: convertNewlineToList(document.getElementById('skill2Desc').value) 
        },
        skill3: {
            icon: document.querySelector('.skill-item:nth-child(4) img').getAttribute('src'),
            name: document.getElementById('skill3Name').value.toUpperCase(),
            desc: convertNewlineToList(document.getElementById('skill3Desc').value) 
        },
        ulti: {
            icon: document.querySelector('.skill-item:nth-child(5) img').getAttribute('src'),
            name: document.getElementById('ultiName').value.toUpperCase(),
            desc: convertNewlineToList(document.getElementById('ultiDesc').value)
        },
        
        // Personaliti & Hikayat
        personalityText: document.getElementById('personalityText').value,
        hikayatText: document.getElementById('hikayatText').value
    };

    // 2. Templat Kod HTML Akhir - DISESUAIKAN SEPERTI BADANG.HTML
    const generatedCode = `<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.heroName}: ${data.heroRank}</title>
    <link rel="stylesheet" href="styles.css"> 

    <style>
        body {
            background-image: url('${data.heroBgURL}'); 
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center center;
        }
    </style>
</head>
<body>

<audio id="global-bg-audio" preload="auto" muted></audio>


    <header class="hero-header-container">
        
        <div class="hero-name-row">
            <div class="hero-number">${data.heroNumber}</div>
            <h1 class="hero-title-pixel">${data.heroName}</h1>
        </div>

        <div class="hero-type-row">
            <img src="Hiasan/logo_pendekar.jpg" alt="Logo Pendekar" class="hero-logo-img">
            <h2 class="hero-type-title">${data.heroType}</h2>
        </div>
        
        <p class="hero-rank-subtitle">${data.heroRank}</p>
    </header>

    <blockquote class="hero-quote-box">
        "${data.heroQuote}"
    </blockquote>

    <main>
        <img src="${data.mainHeroImageURL}" alt="${data.heroName}" class="detail-hero-image">

        <div class="detail-content">
            
            <h4>SKIN</h4>
            
            <div class="skin-gallery-container">
                <h3 id="skin-name-display" class="skin-name-display">${data.skin1Name}</h3>
                <div class="main-skin-images">
                    <img id="main-skin-img-1" src="${data.skin1Img1}" alt="Skin ${data.skin1Name} 1" class="main-skin-img">
                    <img id="main-skin-img-2" src="${data.skin1Img2}" alt="Skin ${data.skin1Name} 2" class="main-skin-img">
                    <img id="main-skin-img-3" src="${data.skin1Img3}" alt="Skin ${data.skin1Name} 3" class="main-skin-img">
                </div>
            </div>

            <div class="skin-selection-container">
                <button id="arrow-left" class="nav-arrow" disabled>&lt;</button>
                <div class="skin-thumbnails-wrapper">
                    <div class="thumbnail-item active" data-skin-index="0" data-skin-name="${data.skin1Name}"
                            data-main-img-1="${data.skin1Img1}"
                            data-main-img-2="${data.skin1Img2}"
                            data-main-img-3="${data.skin1Img3}"
                            onclick="changeSkin(0)">
                         <img src="${data.mainHeroImageURL}" alt="Thumbnail ${data.skin1Name}" class="thumbnail-img">
                         <span class="thumbnail-label">${data.skin1Name}</span>
                    </div>

                    <div class="thumbnail-item" data-skin-index="1" data-skin-name="${data.skin2Name}"
                            data-main-img-1="${data.skin2Img1}"
                            data-main-img-2="${data.skin2Img2}"
                            data-main-img-3="${data.skin2Img3}"
                            onclick="changeSkin(1)">
                         <img src="${data.mainHeroImageURL}" alt="Thumbnail ${data.skin2Name}" class="thumbnail-img">
                         <span class="thumbnail-label">${data.skin2Name}</span>
                    </div>
                </div>
                <button id="arrow-right" class="nav-arrow" >&gt;</button>
            </div>
            
            
            <h4>STATISTIK & STATUS NYAWA DAN TENAGA</h4>
            
            <ul class="biodata-list">
                <li class="stat-item">
                    <span class="stat-label">Serangan</span>
                    <div class="stat-bar-container">
                        <div class="stat-bar stat-bar-red" style="width: ${data.stats.serangan * 10}%;"></div>
                    </div>
                    <span class="stat-score">${data.stats.serangan}</span>
                </li>
                
                <li class="stat-item">
                    <span class="stat-label">Penguasaan</span>
                    <div class="stat-bar-container">
                        <div class="stat-bar stat-bar-orange" style="width: ${data.stats.penguasaan * 10}%;"></div>
                    </div>
                    <span class="stat-score">${data.stats.penguasaan}</span>
                </li>

                <li class="stat-item">
                    <span class="stat-label">Kesukaran</span>
                    <div class="stat-bar-container">
                        <div class="stat-bar stat-bar-blue" style="width: ${data.stats.kesukaran * 10}%;"></div>
                    </div>
                    <span class="stat-score">${data.stats.kesukaran}</span>
                </li>
                
                <li class="stat-item">
                    <span class="stat-label">Kekebalan</span>
                    <div class="stat-bar-container">
                        <div class="stat-bar stat-bar-green" style="width: ${data.stats.kekebalan * 10}%;"></div>
                    </div>
                    <span class="stat-score">${data.stats.kekebalan}</span>
                </li>
                
                <li style="margin-top: 15px;">
                    HP = <span style="color: white; font-weight: bold;">${data.hpBase}</span> <span style="color: #90ee90; font-weight: bold;">+${data.hpBonus}</span>
                </li>
                <li>
                    Mana = <span style="color: white; font-weight: bold;">${data.manaBase}</span> <span style="color: #ADD8E6; font-weight: bold;">+${data.manaBonus}</span>
                </li>
            </ul>


            <h4>BIODATA</h4>
            <ul class="biodata-list">
                <li>Nama Pahlawan : ${data.heroName}</li>
                <li>Nama Sebenar : ${data.realName}</li>
                <li>Gelaran : ${data.heroRank}</li>
                <li>Umur : ${data.heroAge} Tahun</li>
                <li>Number Pahlawan : ${data.heroNumber}</li>
                <li>Jenis Pahlawan : <img src="Hiasan/logo_pendekar.jpg" alt="Logo Pendekar Kecil" class="list-logo"> ${data.heroType}</li>
                <li>Makhluk : ${data.makhluk}</li>
                <li>Bangsa : ${data.bangsa}</li>
                <li>Negeri Asal : ${data.negeriAsal}</li>
                <li>Pekerjaan : ${data.pekerjaan}</li>
                <li>Tinggi : ${data.tinggi} cm</li>
                <li>Berat : ${data.berat} Kg</li>
            </ul>
            
            <h4>SKILL</h4>
            <ul class="skill-list">
                <li class="skill-item">
                    <div class="skill-icon-container">
                        <img src="${data.pasif.icon}" alt="Pasif Skill Icon" class="skill-icon">
                    </div>
                    <div class="skill-details">
                        <span class="skill-name">PASIF: ${data.pasif.name}</span>
                        ${data.pasif.desc} 
                    </div>
                </li>
                <li class="skill-item">
                    <div class="skill-icon-container">
                        <img src="${data.skill1.icon}" alt="Skill 1 Icon" class="skill-icon">
                    </div>
                    <div class="skill-details">
                        <span class="skill-name">SKILL 1: ${data.skill1.name}</span>
                        ${data.skill1.desc} 
                    </div>
                </li>
                <li class="skill-item">
                    <div class="skill-icon-container">
                        <img src="${data.skill2.icon}" alt="Skill 2 Icon" class="skill-icon">
                    </div>
                    <div class="skill-details">
                        <span class="skill-name">SKILL 2: ${data.skill2.name}</span>
                        ${data.skill2.desc} 
                    </div>
                </li>
                <li class="skill-item">
                    <div class="skill-icon-container">
                        <img src="${data.skill3.icon}" alt="Skill 3 Icon" class="skill-icon">
                    </div>
                    <div class="skill-details">
                        <span class="skill-name">SKILL 3: ${data.skill3.name}</span>
                        ${data.skill3.desc} 
                    </div>
                </li>
                <li class="skill-item">
                    <div class="skill-icon-container">
                        <img src="${data.ulti.icon}" alt="Ultimate Icon" class="skill-icon">
                    </div>
                    <div class="skill-details">
                        <span class="skill-name">ULTI: ${data.ulti.name}</span>
                        ${data.ulti.desc} 
                    </div>
                </li>
            </ul>


            <h4>PERSONALITI</h4>
            <ul class="personaliti-list">
                ${data.personalityText.split('\n').filter(line => line.trim() !== '').map(line => `<li>${line.trim()}</li>`).join('\n')}
            </ul>

            <h4>HIKAYAT</h4>
            <div class="hikayat-text">
                ${convertHikayatToParagraphs(data.hikayatText)}
            </div>
        </div>
    </main>
    
    <div class="nav-container">
        <a href="#" class="nav-button back-glow left-button">
            <img src="Hiasan/back_button.jpg" alt="Kembali" title="Kembali ke Galeri">
            <span class="button-label">KEMBALI</span>
        </a>
        
        <a href="index.html" class="nav-button home-glow right-button">
            <img src="Hiasan/home_button.jpg" alt="Halaman Utama" title="Halaman Utama">
            <span class="button-label">HALAMAN UTAMA</span>
        </a>
    </div>
    
    <script src="script.js"></script> 

    <script>
        // Set skin pertama sebagai skin aktif semasa muat halaman
        let currentSkinIndex = 0;
        const skinItems = document.querySelectorAll('.thumbnail-item');
        const mainImg1 = document.getElementById('main-skin-img-1');
        const mainImg2 = document.getElementById('main-skin-img-2');
        const mainImg3 = document.getElementById('main-skin-img-3');
        const skinNameDisplay = document.getElementById('skin-name-display');
        const arrowLeft = document.getElementById('arrow-left');
        const arrowRight = document.getElementById('arrow-right');
        const totalSkins = skinItems.length;

        // Fungsi utama untuk menukar skin
        function changeSkin(index) {
            if (index < 0 || index >= totalSkins) return; 

            currentSkinIndex = index;
            
            // 1. Update Imej Utama
            const selectedSkin = skinItems[currentSkinIndex];
            if (mainImg1) mainImg1.src = selectedSkin.getAttribute('data-main-img-1');
            if (mainImg2) mainImg2.src = selectedSkin.getAttribute('data-main-img-2');
            if (mainImg3) mainImg3.src = selectedSkin.getAttribute('data-main-img-3');
            
            // 2. Update Nama Skin
            if (skinNameDisplay) skinNameDisplay.textContent = selectedSkin.getAttribute('data-skin-name');

            // 3. Update Status Aktif (Opacity/Ketelusan) pada Thumbnail
            skinItems.forEach((item, i) => {
                if (i === currentSkinIndex) {
                    item.classList.add('active'); 
                } else {
                    item.classList.remove('active');
                }
            });

            // 4. Update Status Anak Panah Navigasi
            updateArrows();
        }

        // Fungsi untuk mengemas kini keadaan anak panah
        function updateArrows() {
            // Anak Panah Kiri: Nyahaktifkan jika di skin pertama
            if (currentSkinIndex === 0) {
                if(arrowLeft) {
                    arrowLeft.classList.add('disabled-arrow'); 
                    arrowLeft.disabled = true;
                }
            } else {
                if(arrowLeft) {
                    arrowLeft.classList.remove('disabled-arrow');
                    arrowLeft.disabled = false;
                }
            }

            // Anak Panah Kanan: Nyahaktifkan jika di skin terakhir
            if (currentSkinIndex === totalSkins - 1) {
                if(arrowRight) {
                    arrowRight.classList.add('disabled-arrow'); 
                    arrowRight.disabled = true;
                }
            } else {
                if(arrowRight) {
                    arrowRight.classList.remove('disabled-arrow');
                    arrowRight.disabled = false;
                }
            }
        }

        // Event Listener untuk Anak Panah
        if (arrowLeft) {
            arrowLeft.addEventListener('click', () => {
                changeSkin(currentSkinIndex - 1);
            });
        }
        
        if (arrowRight) {
            arrowRight.addEventListener('click', () => {
                changeSkin(currentSkinIndex + 1);
            });
        }

        // Pastikan paparan skin di set semasa muat halaman
        window.addEventListener('load', () => {
            changeSkin(0);

            // 💡 TAMBAHKAN KOD INI UNTUK MEMULAKAN AUDIO
    // 🟢 KOD YANG BETUL: Menggunakan URL dari borang editor
          managePageAudio('${data.heroAudioURL}');

        });

    </script>

</body>
</html>`;

    // 3. Paparkan Kod
    const outputCodeArea = document.getElementById('outputCodeArea');
    if (outputCodeArea) {
        outputCodeArea.value = generatedCode;
    } else {
        console.error("Elemen 'outputCodeArea' tidak dijumpai.");
        alert("Ralat: Tidak dapat mencari kotak output kod. Pastikan ID betul.");
    }
}

// --- Event Listener ---
const btnGenerate = document.getElementById('btnGenerate');
if (btnGenerate) {
    btnGenerate.addEventListener('click', generateHeroCode);
}