import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'CommandSetDemoCommandSetStrings';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ICommandSetDemoCommandSetProperties {
  messagePrefix: string;
}

const LOG_SOURCE: string = 'CommandSetDemoCommandSet';

export default class CommandSetDemoCommandSet extends BaseListViewCommandSet<ICommandSetDemoCommandSetProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized CommandSetDemoCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    // if exactly one / two items selected, show correct button
    const one_item_selected: Command = this.tryGetCommand('ONE_ITEM_SELECTED');
    if (one_item_selected) {
      one_item_selected.visible = event.selectedRows.length === 1;
    }
    const two_item_selected: Command = this.tryGetCommand('TWO_ITEM_SELECTED');
    if (two_item_selected) {
      two_item_selected.visible = event.selectedRows.length === 2;
    }
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'ONE_ITEM_SELECTED':
        Dialog.alert(`${this.properties.messagePrefix} ONE_ITEM_SELECTED command checked; Title = ${event.selectedRows[0].getValueByName('Title')}`);
        break;
      case 'TWO_ITEM_SELECTED':
        Dialog.alert(`${this.properties.messagePrefix} TWO_ITEM_SELECTED command checked; Title = ${event.selectedRows[event.selectedRows.length-1].getValueByName('Title')}`);
        break;
      case 'ALWAYS_ON':
        Dialog.alert(`${this.properties.messagePrefix} ALWAYS_ON command checked. Total selected: ${event.selectedRows.length}`);
        break;
      default:
        throw new Error('Unknown command');
    }
  }
}