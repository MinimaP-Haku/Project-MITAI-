const noticeAlpha = document.getElementById('notice-alpha');
const noticeSave = document.getElementById('notice-save');
const playBtn = document.getElementById('playBtn');
const music = document.getElementById('bgMusic');
noticeAlpha.addEventListener('click', () => {
    noticeAlpha.style.display = 'none';
    noticeSave.style.display = 'flex';
});
noticeSave.addEventListener('click', () => {
    noticeSave.style.display = 'none';
    music.play().catch(e => console.log("Audio blocked"));
});
playBtn.addEventListener('click', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        window.location.href = '../loading/loading.html';
    }, 500);
});
