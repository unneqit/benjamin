var data;

function ajax(){
    fetch("twine.json")
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
var pid = [];


window.addEventListener ("load", function(){
    pid.push.passages.pid;
    text.innerHTML = passages[1].text;
});
