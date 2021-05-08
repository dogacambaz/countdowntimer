document.addEventListener('DOMContentLoaded', () => {
    const secondsLeftDisplay = document.querySelector('#sec-left')
    const startBtn = document.querySelector('#start-button')
    const stopBtn = document.querySelector('#stop-button')
    const resetBtn = document.querySelector('#reset-button')
    let inputTime = 20
    let secLeft = inputTime
    if(secLeft<10) {
        secondsLeftDisplay.innerHTML = '0'+ secLeft
    }
    else { secondsLeftDisplay.innerHTML = secLeft }
    var Interval;

    // Divide time left by the defined time limit.
    function calculateTimeFraction() {
        const rawTimeFraction = (secLeft) / inputTime;
        return rawTimeFraction - (1 / inputTime) * (1 - rawTimeFraction);
        }
          
      // Update the dasharray value as time passes, starting with 283
      function setCircleDasharray() {
        const circleDasharray = `${(
          calculateTimeFraction() * 283
        ).toFixed(0)} 283`;
        document
          .getElementById("timer-path-remaining")
          .setAttribute("stroke-dasharray", circleDasharray);
      }

    function countDown(){
        Interval = setInterval(() => {
            secLeft -=1
            if(secLeft<=0) {
                secondsLeftDisplay.innerHTML = '00'
                secLeft=0
                setCircleDasharray();
                /*document.getElementById("sec-left").style.animation = "buzz 0.5";*/
                document.getElementsByClassName("timer-path-remaining").setAttribute("color", "red");
                clearInterval();
            }
            else if(secLeft<10) {
                secondsLeftDisplay.innerHTML = '0'+ secLeft;
                setCircleDasharray();
            }
            else {
                secondsLeftDisplay.innerHTML = secLeft
                setCircleDasharray();
            }
            
        },1000)
    }
    startBtn.addEventListener('click',countDown)
    stopBtn.addEventListener('click',function() {
         clearInterval(Interval);
        })
    resetBtn.addEventListener('click',function() {
         clearInterval(Interval);
         secLeft = inputTime;
         if(secLeft<10) {
            secondsLeftDisplay.innerHTML = '0'+ secLeft
        }
        else { secondsLeftDisplay.innerHTML = secLeft }
        setCircleDasharray()
        })

    
})