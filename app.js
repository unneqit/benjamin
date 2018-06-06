var data;

function ajax(){
    fetch("story.json")
    .then(function(res){
        return res.json()
    }).then(function(story){
        data = story
    })
}

var body = document.querySelector('.body');
var choices = document.querySelector('.choice');
var text = document.querySelector('.text');
var visual = document.querySelector('.visual');
var btn = document.querySelector('.choice_btn');
ajax();

var progression="intro";

window.addEventListener ("load", function(){
    text.innerHTML = data[progression].text;
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
});

function chosenRoute(target){
    progression=target;
    showText();
}

function showText(){
    text.innerHTML = data[progression].text;
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
