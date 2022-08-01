var progressBar = document.getElementsByClassName('progress');
var progresses = [];

function getAllProgress (){
    console.log(progressBar);
    progresses = Array.from(progressBar).map(pros => {
        return pros.firstElementChild.textContent;
     }
    );
    console.log(progresses);
}
function SetWidth(){
    getAllProgress();
    for(let i = 0; i < progressBar.length;i++){
        progressBar[i].style.width = progresses[i];
    }
}

SetWidth();