import { Pipe, PipeTransform } from '@angular/core';
import { ChatItem } from '../models/chat-item';

@Pipe({
  name: 'sortChatItems',
  pure: false
})
export class SortChatItemsPipe implements PipeTransform {

  transform(chatItems: ChatItem[] | null): ChatItem[] {
    chatItems!.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return b.lastActivity!.getTime() - a.lastActivity!.getTime();
    });

    return chatItems!;
  }

}
