export class Stereo {
    public on(): void {
        console.log('Stereo is on');
    }

    public off(): void {
        console.log('Stereo is off');
    }

    public setCd(): void {
        console.log('Stereo is set for CD input');
    }

    public setDvd(): void {
        console.log('Stereo is set for DVD input');
    }

    public setRadio(): void {
        console.log('Stereo is set for Radio');
    }

    public setVolume(volume: number): void {
        console.log(`Stereo volume set to ${volume}`);
    }
}