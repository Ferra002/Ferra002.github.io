function waitSeconds(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function spawnHeartsRandomly(amount){
    document.addEventListener('DOMContentLoaded', () => {
        const heartsContainer = document.querySelector('.hearts');
        for (let i = 0; i < amount; i++) {
            let heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            heartsContainer.appendChild(heart);
        }
    });
}

function addYesButtonFunctionality(){
    const card = document.querySelector('.card');
    const button = document.querySelector('.btn.yes');

    button.addEventListener('click', () => {
        card.innerHTML = "<h1>ME HACES MUY FELIZ, TE AMOOOOOOOO <br>💖💖💖💖💖</h1>";
    });
}

function preventNoButtonFunctionality(){
    document.addEventListener("DOMContentLoaded", () => {
        const noButton = document.querySelector(".btn.no");
        const content = noButton.innerHTML;
    
        noButton.addEventListener("mouseup", async () => {
            noButton.innerHTML = "Oops! Algo salió mal :)";
            await waitSeconds();
            noButton.innerHTML = content;
        });
    });
}

function main(){
    spawnHeartsRandomly(60);
    preventNoButtonFunctionality();
    addYesButtonFunctionality();
}

main();