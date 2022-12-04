function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = document.querySelector('.main')
main.style.width = '600px' ;
main.style.height = "480px"
main.style.backgroundColor = "black";


const ball = document.createElement('div')
const b = {x:getRandomInt(0,600),y:getRandomInt(0,480)}
ball.style.backgroundColor = "red"
ball.style.borderRadius = "50%"
ball.style.width = "40px";
ball.style.height = "40px";
ball.style.position = 'relative'
ball.style.top = `${b.y}px`
ball.style.left = `${b.x}px`
main.append(ball);
const asJSON = JSON.stringify(b);
const asObject = JSON.parse(asJSON);
console.log(asJSON)

