import {DisabledCallback} from '../callback';
import {Disabled} from '../response';
import {Command} from './Command';

export class DisabledCommand extends Command {

  protected success(): void {

    const callback = this.callback as DisabledCallback;

    callback(new Disabled(), false);

  }

}
