import { HomeTheater } from './Facade/HomeTheater';
import { Stereo } from './Stereo/Stereo';
import { Tv } from './TV/Tv';

const stereo = new Stereo();
const tv = new Tv();
const homeTheater = new HomeTheater(tv, stereo);
homeTheater.watchMovie();