interface VisualizerProps {
    dataArray: number[];
    canvas: OffscreenCanvas;
}

type DrawVisualizerProps = Pick<VisualizerProps, "dataArray">;

let canvas: OffscreenCanvas | null = null;

const barWidth = 8;
const gap = 2;

const drawVisualizer = ({ dataArray }: DrawVisualizerProps) => {
    if (canvas) {
        const cwidth = canvas.width;
        const cheight = canvas.height;
        const barNum = cwidth / (barWidth + gap);
        const ctx = canvas.getContext("2d")!;

        const gradient = ctx.createLinearGradient(0, 0, 0, cheight);
        gradient.addColorStop(1, "#8968bc");
        gradient.addColorStop(0.7, "#71bc68");
        gradient.addColorStop(0, "#bc689b");

        ctx.fillStyle = gradient;

        const draw = () => {
            const step = Math.round(dataArray.length / barNum);

            // Clear previous state, so we get actuall animation
            ctx.clearRect(0, 0, cwidth, cheight);

            for (let i = 0; i < barNum; i++) {
                const value = dataArray[i * step];

                // Divide height with value to display audio as graph on bottom on clear background
                ctx.fillRect(i * (barWidth + gap), cheight - value, barWidth, cheight);
            }
        };
        requestAnimationFrame(draw);
    }
};

self.onmessage = function (e: MessageEvent<VisualizerProps>) {
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
