import { Stereo } from '../Stereo/Stereo';
import { Tv } from '../TV/Tv';

export class HomeTheater {
    private tv: Tv;
    private stereo: Stereo;

    constructor(tv: Tv, stereo: Stereo) {
        this.tv = tv;
        this.stereo = stereo;
    }

    public watchMovie(): void {
        this.tv.on();
        this.stereo.on();
        this.stereo.setDvd();
        this.stereo.setVolume(11);
    }
}