const anmation = bodymovin.loadAnimation({
    container : document.querySelector(".lottie"),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path: "https://assets1.lottiefiles.com/packages/lf20_sxh1eqfy.json" // 2-2. 다운받아서 사용.
});

anmation.setSpeed(0.8);
