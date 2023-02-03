export class ChatItem {
    id: number;
    name?: string;
    displayMessage?: string;
    lastActivity?: Date;
    muted?: boolean;
    unreadMessagesCount?: number;
    image?: string;
    isActive?: boolean;
    isPinned?: boolean;
}