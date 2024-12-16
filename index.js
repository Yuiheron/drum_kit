const drumList = document.querySelectorAll(".drum");
const sounds = {
    "w": "sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/crash.mp3",
    "k": "sounds/kick-bass.mp3",
    "l": "sounds/snare.mp3"
}

function buttonAnimation(currentKey){
    const activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, "100");
}

function addSound(){
    const key = this.innerHTML;
    if(sounds[key]){
        const sound = new Audio(sounds[key]);
        sound.play();
    }

    buttonAnimation(key);
}



drumList.forEach((drum) => {
    drum.addEventListener("click",addSound);
})

document.addEventListener("keydown", function(event){
    const key = event.key;
    if(sounds[key]){
        const sound = new Audio(sounds[key]);
        sound.play();
    }

    buttonAnimation(key);
});