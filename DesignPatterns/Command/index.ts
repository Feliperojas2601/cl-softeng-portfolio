import { RemoteControl } from './Invoker/RemoteControl';
import { Light } from './Receiver/Light';
import { LightOn } from './Commands/LightOn';
import { LightOff } from './Commands/LightOff';


const remoteControl = new RemoteControl();
const light = new Light('Living Room');
const lightOnCommand = new LightOn(light);
const lightOffCommand = new LightOff(light);
remoteControl.setCommand(0, lightOnCommand, lightOffCommand);
remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.undoButtonWasPushed();
console.log(remoteControl.toString());