var data;

function ajax(){
    fetch("scripts/story.json")
    .then(function(res){
        return res.json()
    }).then(function(story){
        data = story
    })
}

var body = document.querySelector('.body');
var choices = document.querySelector('.choice');
var text = document.querySelector('.text');
var textContainer = document.querySelector('.textContainer');
var img = document.querySelector('.image');
var music = document.querySelector('.music');
var btn = document.querySelector('.choice_btn');
var mute = document.querySelector('.mute');
var restart = document.querySelector('.restart');
var musicMemory = "";
ajax();

var progression="intro";
var step=0;

var homeUi = {
  startScreen : document.querySelector(".startStory"),
  startBtn : document.querySelector('.startBtn')
};

function chosenRoute(target){
    textContainer.classList.add("textContainerNext");
    step=-1;
    progression=target;
    showStory();
}

function showStory(){
    text.innerHTML = data[progression].step[step].text;
    img.src = data[progression].image;
    if (musicMemory !== data[progression].music) {
        musicMemory = data[progression].music;
        music.src = data[progression].music;
        music.play();
    }
    choices.innerHTML="";
}

function displayChoices(){
    data[progression].choices.forEach(function(element){
        var newBtn = document.createElement('button');
        newBtn.classList.add("choice_btn");
        newBtn.textContent = element.text;
        newBtn.addEventListener('click', function(){
            chosenRoute(element.target);
        })
        choices.appendChild(newBtn);
    });
}

function nextStep(){
    if (step >= data[progression].step.length - 1) {
        textContainer.classList.remove("textContainerNext");
        showStory();
        displayChoices();
    }
    if(step < data[progression].step.length - 1) {
        step++;
        showStory();
    }
}


textContainer.addEventListener('click', function(){
    nextStep();
});




homeUi.startBtn.addEventListener('click', function() {
  homeUi.startScreen.classList.add('animated','bounceOut');
  showStory();
});

mute.addEventListener('click', function() {
    if (music.muted===false) {
        music.muted = true;
        mute.innerHTML = "unmute"
    } else {
        music.muted = false;
        mute.innerHTML = "mute"
    }
});

restart.addEventListener('click', function() {
    step=0
    progression = "intro";
    showStory();
})
