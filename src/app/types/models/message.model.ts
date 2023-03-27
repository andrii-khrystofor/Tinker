export interface Message{
    id: number;
    isPinned: boolean;
    message: string;
    senderId: number;
    sentTime: Date;
}
export interface MessageDTO{
    isPinned: boolean;
    message: string;
    senderId: number;
    sentTime: Date;
}