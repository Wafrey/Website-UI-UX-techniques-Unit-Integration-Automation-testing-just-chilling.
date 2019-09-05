document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('.panel', 1.8, {
        scaleY: 1,
        height: '100vh',
        ease: Bounce.easeOut
    });
    TweenMax.to('#light', 1, {
        opacity: 1,
        y: 0,
        delay: 1,
        ease: Back.easeOut.config(1.7)
    });
    TweenMax.to('p', 1, {
        opacity: 1,
        y: 20,
        delay: 1.4
    });
    TweenMax.to('.box', 3, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.3)
    });
    TweenMax.to('#hide', 3, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

document.getElementById('hide').addEventListener('click', function () {
    window.location.reload();
})