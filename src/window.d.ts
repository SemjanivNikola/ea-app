export {};

declare global {
    interface Window {
        webkitAudioContext: AudioContext;
        mozAudioContext: AudioContext;
        msAudioContext: AudioContext;
    }
}
