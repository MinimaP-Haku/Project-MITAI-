const noticeAlpha = document.getElementById('notice-alpha');
const noticeSave = document.getElementById('notice-save');
const playBtn = document.getElementById('playBtn');
const music = document.getElementById('bgMusic');
const sfx = document.getElementById('sndAccept');
const voices = [
    "teto_v1", "luka_v2", "luka_v1", "rin", "chis-a", "miku_v2", 
    "rei", "yuka", "momo", "tei", "haku", "reito", "miku_v1", 
    "uta", "neru", "teto_v2"
];

const introVoice = document.getElementById('introVoice');

function playSfx() {
    if (sfx) {
        if (music) {
            music.volume = 0.15; 
        }
        
        sfx.currentTime = 0;
        sfx.volume = 1.0; 
        sfx.play().catch(() => {});

        setTimeout(() => {
            if (music && noticeSave.style.display !== 'none') {
                music.volume = 0.4;
            }
        }, 800);
    }
}

function playRandomIntroVoice() {
    if (introVoice) {
        const randomVoice = voices[Math.floor(Math.random() * voices.length)];
        introVoice.src = `../../assets/sounds/intro/project_mitai/${randomVoice}.wav`;
        introVoice.volume = 0.6;
        introVoice.play().catch(() => {});
    }
}

noticeAlpha.addEventListener('click', () => {
    playSfx();
    noticeAlpha.style.display = 'none';
    noticeSave.style.display = 'flex';

});

noticeSave.addEventListener('click', () => {
    playSfx();
    noticeSave.style.display = 'none';
    music.volume = 0.4; 
    music.play().catch(e => console.log("Audio blocked"));

    setTimeout(playRandomIntroVoice, 100);
});

playBtn.addEventListener('click', () => {
    playSfx();
    if (music) {
        let fadeOut = setInterval(() => {
            if (music.volume > 0.05) {
                music.volume -= 0.05;
            } else {
                music.pause();
                clearInterval(fadeOut);
            }
        }, 50);
    }
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        window.location.href = '../loading/loading.html';
    }, 500);
});

document.addEventListener('click', (e) => {
    const effect = document.createElement('div');
    effect.className = 'click-effect-classic';
    
    effect.style.left = e.pageX + 'px';
    effect.style.top = e.pageY + 'px';
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 500);
});
