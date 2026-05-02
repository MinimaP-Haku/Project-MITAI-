const progressFill = document.getElementById('progress-fill');
const detailsText = document.getElementById('loading-details');
const statusText = document.getElementById('status-text');
const notice = document.getElementById('notice-unfinished');
const loadingSteps = [
    "Decrypting neural links...",
    "Connecting to 三田井 servers...",
    "Loading textures and assets...",
    "Compiling shader cache...",
    "Finalizing environment...",
    "ERROR: Section not found!"
];
let progress = 0;
let stepIndex = 0;
function simulateLoading() {
    progress += Math.random() * 5;
    if (progress > 100) progress = 100;
    progressFill.style.width = progress + "%";
    if (progress > (stepIndex + 1) * (100 / loadingSteps.length)) {
        if (stepIndex < loadingSteps.length - 1) {
            detailsText.innerText = loadingSteps[stepIndex];
            stepIndex++;
        }
    }
    if (progress < 100) {
        setTimeout(simulateLoading, 100);
    } else {
        statusText.innerText = "LOADING COMPLETE";
        setTimeout(() => {
            document.getElementById('loading-container').style.display = 'none';
            notice.style.display = 'flex';
        }, 1000);
    }
}
window.onload = simulateLoading;
