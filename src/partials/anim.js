async function iterOneAnim(elem) {
    await elem.animate(
        {
            opacity: [0, 1],
            transform: ['scale(0)', 'scale(1)'],
        },
        {
            fill: 'both',
            duration: 300,
            iterations: 1,
        }
    );
    setTimeout(() => {
        elem.style.background = 'rgba(0, 0, 0, 0.4)';
    }, 301);

    // console.dir('Modals: ', elem);
}

async function blinkAnim(elem) {
    let activeAnimation;

    const anim = elem.firstChild;
    const startBlink = async e => {
        e.preventDefault();

        activeAnimation = await anim.animate(
            { opacity: [0.8, 1, 0.8] },
            {
                fill: 'both',
                duration: 2000,
                iterations: Infinity,
            }
        );
    };

    const stopBlink = async () => {
        if (activeAnimation) {
            await activeAnimation.cancel();
        }
    };
    await anim.addEventListener('mouseenter', startBlink);
    await anim.addEventListener('mouseleave', stopBlink);
}

async function scaleAnimList(elems) {
    let activeAnim;
    let delay = 0;

    elems.forEach(elem => {
        setTimeout(async () => {
            await elem.animate(
                {
                    opacity: [0, 1],
                    transform: ['scale(0)', 'scale(1)'],
                    rotate: ['0turn', '0.5turn', '1turn'],
                },
                {
                    fill: 'both',
                    duration: 500,
                    iterations: 1,
                }
            );
        }, delay);
        delay += 150;
    });

    for (const elem of elems) {
        await elem.addEventListener('mouseenter', async e => {
            await e.preventDefault();
            activeAnim = await elem.animate(
                {
                    transform: ['scale(0.95)', 'scale(1)', 'scale(0.95)'],
                    opacity: [0.8, 1, 0.8],
                },
                {
                    fill: 'both',
                    duration: 200,
                    iterations: Infinity,
                }
            );
        });
        await elem.addEventListener('mouseleave', async e => {
            await e.preventDefault();
            if (activeAnim) {
                await activeAnim.cancel();
            }
        });
    }
}

export {iterOneAnim, blinkAnim, scaleAnimList}