'use strict'

var ballSize = 100

function onBallClick() {
    // if (ballSize===400){
    //     ballSize=100
    //     return
    // }

    var elBall = document.querySelector('.ball')
    ballSize += 50
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.style.lineHeight = ballSize + 'px'
    elBall.innerText = ballSize

    if (ballSize > 400) {
        ballSize = 100
        elBall.style.width = ballSize + 'px'
        elBall.style.height = ballSize + 'px'
        elBall.style.lineHeight = ballSize + 'px'
        elBall.innerText = ballSize
        return
    }




}