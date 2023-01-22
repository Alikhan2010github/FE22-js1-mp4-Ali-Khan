
// all letter i container
const divAnimation = {
    targets: '#d1',
    loop: 3,
    borderRadius: ['15%', '50%'],
    delay: anime.stagger(1000, { start: 1500 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay: false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(111, 30%, 19%)'},
        { translateY: '200px', translateX: '50px', },
        { translateY: '0px', translateX: '0px', backgroundColor: ' hsl(163, 100%, 50%)'},
    ],
};

const div2Animation = {
    targets: '#d2',
    loop: 1,
    borderRadius: ['017%', '50%'],
    delay: anime.stagger(1200, { start: 5000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay: false,
    keyframes: [
        { translateY: '10px', translateX: '100px',backgroundColor:  'hsl(141, 30%, 72%)' },
        { translateY: '200px', translateX: '50px', },
        { translateY: '0px', translateX: '0px', backgroundColor: 'hsl(141, 30%, 72%) '},
    ],
};
const div3Animation = {
    targets: '#d3',
    loop: 2,
    borderRadius: ['5%', '50%'],
    delay: anime.stagger(1400, { start: 6000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay: false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(312, 78%, 90%)'},
        { translateY: '200px', translateX: '50px', },
        { translateY: '0px', translateX: '0px', backgroundColor: 'hsl(312, 78%, 90%)'},
    ],
};
const div4Animation = {
    targets: '#d4',
    loop: 3,
    borderRadius: ['30%', '60%'],
    delay: anime.stagger(2600, { start: 1000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay: false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor:  'hsl(137, 80%, 90%)'},
        { translateY: '200px', translateX: '50px', },
        { translateY: '0px', translateX: '0px', backgroundColor:  'hsl(137, 80%, 90%)'},
    ]
};
const div5Animation = {
    targets: '#d5',
    loop: 1,
    borderRadius: ['10%', '50%'],
    delay: anime.stagger(3800, { start: 1600 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay: false,
    keyframes: [
        { translateY: '100px', translateX: '100px', backgroundColor: 'hsl(242, 80%, 90%)' },
        { translateY: '200px', translateX: '50px', },
        { translateY: '0px', translateX: '0px', backgroundColor: 'hsl(242, 80%, 90%)' },
    ]
};

const div6Animation = {
    targets: '#d6',
    loop: 2,
    borderRadius: ['20%', '50%'],
    delay: anime.stagger(5000, { start: 8000 }),
    easing: 'easeInOutQuad',
    duration: 3000,
    autoplay: false,
    keyframes: [
        { translateY: '90px', translateX: '10px', backgroundColor: 'hsl(61, 89%, 76%)' },
        { translateY: '80px', translateX: '50px', },
        { translateY: '0px', translateX: '0px',  backgroundColor: 'hsl(61, 89%, 76%)'},
    ]
};


const div7Animation = {
    targets: '#d7',
    loop: 2,
    borderRadius: ['20%', '50%'],
    delay: anime.stagger(2200, { start: 1000 }),
    easing: 'easeInOutQuad',
    duration: 4000,
    autoplay: false,
    keyframes: [
        { translateY: '10px', translateX: '40px', backgroundColor: 'hsl(18, 73%, 82%)'},
        { translateY: '150px', translateX: '40px', },
        { translateY: '0px', translateX: '0px', backgroundColor: 'hsl(18, 73%, 82%)'},
    ]
};



//________________________________________BTN __________
anime(divAnimation)
anime(div2Animation)
anime(div3Animation)
anime(div4Animation)
anime(div5Animation)
anime(div6Animation)
anime(div7Animation)

const btnForAnime = anime(divAnimation);

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn = document.querySelector('#stop');

playBtn.addEventListener('click', btnForAnime.play);
pauseBtn.addEventListener('click', btnForAnime.pause);

stopBtn.addEventListener('click', function () {
    btnForAnime.restart();
    btnForAnime.pause();

})

const btnForAnime2 = anime(div2Animation);

playBtn.addEventListener('click', btnForAnime2.play);
pauseBtn.addEventListener('click', btnForAnime2.pause);

stopBtn.addEventListener('click', function () {
    btnForAnime2.restart();
    btnForAnime2.pause();

});

const btnForAnime3 = anime(div3Animation);

playBtn.addEventListener('click', btnForAnime3.play);
pauseBtn.addEventListener('click', btnForAnime3.pause);

stopBtn.addEventListener('click', function () {
    btnForAnime3.restart();
    btnForAnime3.pause();

});

const btnForAnime4 = anime(div4Animation);

playBtn.addEventListener('click', btnForAnime4.play);
pauseBtn.addEventListener('click', btnForAnime4.pause);

stopBtn.addEventListener('click', function () {
    btnForAnime4.restart();
    btnForAnime4.pause();

});

const btnForAnim5 = anime(div5Animation);

playBtn.addEventListener('click', btnForAnim5.play);
pauseBtn.addEventListener('click', btnForAnim5.pause);

stopBtn.addEventListener('click', function () {
    btnForAnim5.restart();
    btnForAnim5.pause();

});

const btnForAnim6 = anime(div6Animation);

playBtn.addEventListener('click', btnForAnim6.play);
pauseBtn.addEventListener('click', btnForAnim6.pause);

stopBtn.addEventListener('click', function () {
    btnForAnim6.restart();
    btnForAnim6.pause();

});

const btnForAnim7 = anime(div7Animation);

playBtn.addEventListener('click', btnForAnim7.play);
pauseBtn.addEventListener('click', btnForAnim7.pause);

stopBtn.addEventListener('click', function () {
    btnForAnim7.restart();
    btnForAnim7.pause();

});










