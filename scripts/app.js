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
var img = document.querySelector('.image');
var music = document.querySelector('.music');
var btn = document.querySelector('.choice_btn');
ajax();

var progression="intro";

var homeUi = {
  startScreen : document.querySelector(".startStory"),
  startBtn : document.querySelector('.startBtn')
};

function chosenRoute(target){
    progression=target;
    showStory();
}

function showStory(){
    text.innerHTML = data[progression].text;
    img.src = data[progression].image;
    music.src = data[progression].music;
    music.play();
    choices.innerHTML="";

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

homeUi.startBtn.addEventListener('click', function() {
  homeUi.startScreen.classList.add('animated','bounceOut');
  showStory();
});