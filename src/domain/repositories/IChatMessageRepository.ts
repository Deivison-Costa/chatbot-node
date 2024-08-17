import { ChatMessage } from "../entities/ChatMessage"

export interface IChatMessageRepository {
  save(chatMessage: ChatMessage): Promise<void>
  find(message: string): Promise<ChatMessage | null>
}