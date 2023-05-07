let  cardContainers=[...document.querySelectorAll(".card-container")];
let  preBtns=[...document.querySelectorAll(".pre-btn")];
let  nxtBtns=[...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener("click",()=>{
        item.scrollLeft += containerWidth-200;
    });

    preBtns[i].addEventListener("click",()=>{
        item.scrollLeft -=containerWidth-200;
    });
});
// let movies=[
//     "images/poster 1.png",
//     "images/poster 2.png",
//     "images/poster 3.png",
//     "images/poster 4.png",
//     "images/poster 5.png",
//     "images/poster 6.png",
//     "images/poster 7.png",
//     "images/poster 8.png",
//     "images/poster 9.png",
//     "images/poster 10.png",
//     "images/poster 11.png",
//     "images/poster 12.png"
// ];
// var SearchImg =movies[Math.floor(Math.random()*12)];
// var el=document.querySelector(".Search-Bar").style;
// setInterval(()=>{
//     var SearchImg =movies[Math.floor(Math.random()*12)];
//     document.querySelector(".Search-Bar").style.backgroundImage="uel("+SearchImg+")";
// },1000);
    