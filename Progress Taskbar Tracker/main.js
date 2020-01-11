document.addEventListener("DOMContentLoaded", function(){                   // what is DOMContentloaded
    document.getElementById('upload').addEventListener("click", Movebar);
        function Movebar(){
            let innerBar = document.getElementById('innerBar');
            let status = document.getElementById('status');
            let width = 1;
            let id = setInterval(TimeFrame, 20)     // what is setInterval

            function TimeFrame(){
                if(width >= 100){
                    clearInterval(id);
                } else {
                    width ++;
                    innerBar.style.width = width + '%';
                    status.innerHTML = width + '%';
                }
            }
        }
    
})


// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

// The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

// The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

{/* <button onclick="myFunction()">Try it</button>

var myVar;

function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
} */}