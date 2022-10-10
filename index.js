// For the mouse click only
let drumNo = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumNo; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonValue = this.innerHTML;
    makeSound(buttonValue);
    makeAnimation(buttonValue);
  });
}

// For the keyboard key press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  makeAnimation(event.key);
});


//Make Sound Function
function makeSound(key) {
  switch (key) {
    case "w":
      var a1 = new Audio("/sounds/tom-1.mp3");
      a1.play();
      break;
    case "a":
      var a2 = new Audio("/sounds/tom-2.mp3");
      a2.play();
      break;
    case "s":
      var a3 = new Audio("/sounds/tom-3.mp3");
      a3.play();
      break;
    case "d":
      var a4 = new Audio("/sounds/tom-4.mp3");
      a4.play();
      break;
    case "j":
      var a5 = new Audio("/sounds/snare.mp3");
      a5.play();
      break;
    case "k":
      var a6 = new Audio("/sounds/kick-bass.mp3");
      a6.play();
      break;
    case "l":
      var a7 = new Audio("/sounds/crash.mp3");
      a7.play();
      break;
  }
}
// Animation Function
function makeAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
   
// TimeOut Function
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}


























// var a1 = new Audio("/sounds/tom-1.mp3");
// var a2 = new Audio("/sounds/tom-2.mp3");
// var a3 = new Audio("/sounds/tom-3.mp3");
// var a4 = new Audio("/sounds/tom-4.mp3");
// var a5 = new Audio("/sounds/snare.mp3");
// var a6 = new Audio("/sounds/kick-bass.mp3");
// var a7 = new Audio("/sounds/crash.mp3");
// let arr = [a1, a2, a3, a4, a5, a6, a7];
// let drumNo = document.querySelectorAll(".drum").length;
// for (let i = 0; i < drumNo; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", handleClick);
//   function handleClick() {
//     arr[i].play();
//   }
// }

// document.addEventListener("keypress", keyTap);
// function keyTap(event) {
//   switch (event.key) {
//     case "w":
//       var a1 = new Audio("/sounds/tom-1.mp3");
//       a1.play();
//       break;
//     case "a":
//       var a2 = new Audio("/sounds/tom-2.mp3");
//       a2.play();
//       break;
//     case "s":
//       var a3 = new Audio("/sounds/tom-3.mp3");
//       a3.play();
//       break;
//     case "d":
//       var a4 = new Audio("/sounds/tom-4.mp3");
//       a4.play();
//       break;
//     case "j":
//       var a5 = new Audio("/sounds/snare.mp3");
//       a5.play();
//       break;
//     case "k":
//       var a6 = new Audio("/sounds/kick-bass.mp3");
//       a6.play();
//       break;
//     case "l":
//       var a7 = new Audio("/sounds/crash.mp3");
//       a7.play();
//       break;
//   }
// }

// let drumNo = document.querySelectorAll(".drum").length;
// for (let i = 0; i < drumNo; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click",kroAction);
//    function kroAction() {
//     var x = this.innerHTML;
//     switch (x) {

//       case "w":
//         var a1 = new Audio("/sounds/tom-1.mp3");
//         a1.play();
//         break;
//       case "a":
//         var a2 = new Audio("/sounds/tom-2.mp3");
//         a2.play();
//         break;
//       case "s":
//         var a3 = new Audio("/sounds/tom-3.mp3");
//         a3.play();
//         break;
//       case "d":
//         var a4 = new Audio("/sounds/tom-4.mp3");
//         a4.play();
//         break;
//       case "j":
//         var a5 = new Audio("/sounds/snare.mp3");
//         a5.play();
//         break;
//       case "k":
//         var a6 = new Audio("/sounds/kick-bass.mp3");
//         a6.play();
//         break;
//       case "l":
//         var a7 = new Audio("/sounds/crash.mp3");
//         a7.play();
//         break;
//     }
//   }
// }

// function Audio (path){
//     this.path = path;
//     this.play = function(){
//         a1.play();
//     }
// }
// var a1 = new Audio("/sounds/tom-1.mp3");
// var a2 = new Audio("/sounds/tom-2.mp3");
// var a3 = new Audio("/sounds/tom-3.mp3");
// var a4 = new Audio("/sounds/tom-4.mp3");
// var a5 = new Audio("/sounds/snare.mp3");
// var a6 = new Audio("/sounds/kick-bass.mp3");
// var a7 = new Audio("/sounds/crash.mp3");
