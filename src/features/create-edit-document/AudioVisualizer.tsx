import { useEffect, useMemo } from "react";
import style from "./AudioVisualizer.module.css";

const AudioVisualizerCopy = () => {
    const worker: Worker = useMemo(() => new Worker(new URL("./visualizer.worker.ts", import.meta.url)), []);

    const drawSpectrum = function (analyser: AnalyserNode) {
        const canvas = document.querySelector("canvas")?.transferControlToOffscreen();

        if (window.Worker && canvas) {
            worker.postMessage({ canvas }, [canvas]);

            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            const animate = () => {
                //  Total number of data points available to AudioContext sampleRate. Half of the value of the AnalyserNode
                analyser.getByteFrequencyData(dataArray);

                worker.postMessage({ dataArray }, {});
                requestAnimationFrame(animate);
            };
            animate();
        }
        return;
    };

    useEffect(() => {
        const record = navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        });
        record
            .then(function onSuccess(stream) {
                const audioContext =
                    window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;

                const context = new audioContext();

                const audioInput = context.createMediaStreamSource(stream);
                const binaryData = [];
                binaryData.push(stream);
                // const microphone
                // const microphone.src = window.URL.createObjectURL(new Blob(binaryData, { type: "application/zip" }));
                // microphone.onloadedmetadata = function (e) {};
                const analyser = context.createAnalyser();
                audioInput.connect(analyser);

                drawSpectrum(analyser);
            })
            .catch((error: Error) => {
                // eslint-disable-next-line no-console
                console.error("Something failed >> ", error.message);
            });
    }, []);

    return (
        <>
            {!navigator.mediaDevices.getUserMedia ? (
                <p>Your browser does not have mediastream support</p>
            ) : (
                <>
                    <audio id="microphone" autoPlay />
                    <div className={style.wrap}>
                        <canvas id="canvas" width="1000" height="350" />
                    </div>
                </>
            )}
        </>
    );
};

export default AudioVisualizerCopy;
