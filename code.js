document.addEventListener('DOMContentLoaded', () => {
    const secondsLeftDisplay = document.querySelector('#sec-left')
    const startBtn = document.querySelector('#start-button')
    const stopBtn = document.querySelector('#stop-button')
    const resetBtn = document.querySelector('#reset-button')
    let secLeft = 20
    secondsLeftDisplay.innerHTML = secLeft
    
    var Interval ;
    function countDown(){
        Interval = setInterval(function(){
            if(secLeft<=0) {
                clearInterval(secLeft=0)
            }
            if(secLeft<10) {
                secondsLeftDisplay.innerHTML = '0'+ secLeft
            }
            else {
                secondsLeftDisplay.innerHTML = secLeft
            }
            secLeft -=1
        },1000)
    }
    startBtn.addEventListener('click',countDown)
    stopBtn.addEventListener('click',function() {
         clearInterval(Interval);
        })
    resetBtn.addEventListener('click',function() {
         clearInterval(Interval);
         secLeft = 20
         secondsLeftDisplay.innerHTML = secLeft
        })
})