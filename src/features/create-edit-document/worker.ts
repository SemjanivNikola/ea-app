let canvas = null;

const meterWidth = 8;
const gap = 2;

const drawVisualizer = ({ dataArray }) => {
    const cwidth = canvas?.width;
    const cheight = canvas?.height;
    const meterNum = cwidth / (meterWidth + gap);
    const ctx = canvas?.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, cheight);
    gradient.addColorStop(1, "#a467af");
    gradient.addColorStop(0.3, "#ff0");
    gradient.addColorStop(0, "#f00");
    ctx.fillStyle = gradient;

    const draw = () => {
        const step = Math.round(dataArray.length / meterNum);

        // Clear previous state, so we get actuall animation
        ctx.clearRect(0, 0, cwidth, cheight);

        for (let i = 0; i < meterNum; i++) {
            const value = dataArray[i * step];

            ctx.fillRect(i * (meterWidth + gap), cheight - value, meterWidth, cheight);
        }
    };
    requestAnimationFrame(draw);
};

self.onmessage = function (e) {
    const { dataArray, canvas: canvasMessage } = e.data;

    if (canvasMessage) {
        canvas = canvasMessage;
    } else {
        drawVisualizer({ dataArray });
    }
};

self.onerror = (e) => {
    // eslint-disable-next-line no-console
    console.error("Error >> ", e);
};
