export interface Message{
    id: number;
    isPinned: boolean;
    message: string;
    senderId: string;
    sentTime: Date;
    chatId?: string;
}
export interface MessageDTO{
    isPinned: boolean;
    message: string;
    senderId: number;
    sentTime?: Date;
    chatId?: string;
}