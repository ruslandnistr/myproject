let modal = document.getElementById('myModal');
let body = document.getElementsByClassName('body');

let buttonNo = document.getElementsByClassName("button-modal-no")[0];
let buttonYes = document.getElementsByClassName("button-modal-yes")[0];
btn = function() {
    modal.style.display = "block";
}
btn();

    buttonYes.addEventListener('click', ageYes)
     function ageYes() {
        modal.style.display = "none";
}
    buttonNo.addEventListener('click', ageNo) 
         function ageNo() {
            modal.style.display = "none";
            const dalaySecs = 10;
            const startTime = new Date();
            function updateSelfDestruct(){
            const selfDestractContainer = document.querySelector('.self-destruct');
            const curentTime = new Date();
            const elepsedTimeSec = Math.round((curentTime - startTime) / 1000);
            const leftSecs = dalaySecs - elepsedTimeSec;
            selfDestractContainer.innerText = leftSecs;
            if(leftSecs < 1){
            document.querySelector('body').innerHTML = '';
    }
    }
setInterval(updateSelfDestruct, 1000)
}
Window.addEventListener("click", (event) => {
    if (event.target == modal) {
                body = "none";
        } 
    });