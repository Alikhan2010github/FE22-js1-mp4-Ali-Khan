const animationInfo = {
    targets: '.text',
    translateX: 250,
    left: -10,
    easing: 'easeInOutQuad',  
    duration: 5000,
    loop: true,
    opacity: [1,5],
    delay: 900,
   
    

    keyframes: [
        {translateY: '-0px', translateX: '0px'},
        {translateY: '500px', translateX: '-100px'},

        {translateY: '100px', translateX: '100px'},
        {translateY: '0px', translateX: '0px'},

    ]
};

   

const help=anime(animationInfo);


const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');


playBtn.addEventListener('click', help.play);
pauseBtn.addEventListener('click', help.pause);

stopBtn.addEventListener('click', function () {
    help.restart();
    help.pause();


});




