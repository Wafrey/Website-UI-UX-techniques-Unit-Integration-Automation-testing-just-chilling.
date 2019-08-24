class GeorgiBg {

    paint(ctx, size, props) {

        for (let i = 0; i < 8; i++) {

            let fraction = i * 2;

            ctx.beginPath();
            ctx.fillStyle = 'darkblue';
            ctx.arc(20 + (fraction * 10), size.height - 10, 8, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

registerPaint('georgibg', GeorgiBg);