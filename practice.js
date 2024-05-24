let i = 30;
const timer = setInterval(function(){
        console.log(i)
        i--
    if(i == 0){
        clearInterval(timer)
        console.log('Time Up!')
    }
}, 1000)