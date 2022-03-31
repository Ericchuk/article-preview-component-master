let share = document.querySelector('.share');
let shareOpen = document.querySelector('.share-open');
let close = document.querySelector(".hover-share-icon");
let triangle = document.querySelector(".triangle")
function openShare(){
    if(shareOpen.style.display ==="flex"){
        shareOpen.style.display="none";
        share.style.background="hsl(210, 46%, 95%)";
        triangle.style.display="none";
    }else{shareOpen.style.display ="flex",
          share.style.background="hsl(217, 19%, 35%)",
          triangle.style.display="block";
    }
}

share.addEventListener("click", openShare);
close.addEventListener("click", openShare);