/* global src */

$(document).ready(function () {

"use strict";
new WOW().init();
    

    
const testWrapper = document.querySelector(".text-wrapper");
const textArea = document.querySelector("#text-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
    var timer = [0,0,0,0] ;
    var interval;
    var timerRunning = false;
    
    function leadingZero(time) {
        if(time <= 9){
            time ="0" + time;
        }
        return time;
    }
    
     function runTimer(){
         
        let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
        theTimer.innerHTML = currentTime;
        timer[3]++;
         
        timer[0] = Math.floor((timer[3]/100)/60);
        timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60))
        timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)) 
         
    }
       function spellChek(){
        let textEnterd = textArea.value;
        let originTextMatch = originText.substring(0,textEnterd.length);
           if(textEnterd.trim() == originText.trim()){
               
              clearInterval(interval);
              textArea.style.borderColor= "#429890";
           } else {
              if(textEnterd == originTextMatch){
                  textArea.style.borderColor= "green";
              } else{
                  textArea.style.borderColor= "#E95D0F";
              }
           }
      
    }
    
    function start(){
      let textEnterdLength =textArea.value.length;
        if(textEnterdLength === 0 && !timerRunning){
            timerRunning = true;
          interval = setInterval(runTimer,10);
        }
        
        console.log(textEnterdLength);
    }
   
 function reset(){
     clearInterval(interval);
     interval = null;
     timer =[0,0,0,0];
     timerRunning = false;
     textArea.value ="";
     theTimer.innerHTML ="00:00:00";
     textArea.style.borderColor ="#ccc";
 }
    

    textArea.addEventListener("keypress" , start , false);
    textArea.addEventListener("keyup" ,spellChek , false);
    resetButton.addEventListener("click", reset , false);
    
    
});
