import { IChatMessageRepository } from "../../domain/repositories/IChatMessageRepository"
import { ChatMessage } from "../../domain/entities/ChatMessage"

export class ChatMessageRepository implements IChatMessageRepository {
  private messages: Map<string, ChatMessage> = new Map()

  async save(chatMessage: ChatMessage): Promise<void> {
    this.messages.set(chatMessage.userMessage, chatMessage)
  }

  async find(message: string): Promise<ChatMessage | null> {
    return this.messages.get(message) || null
  }
}