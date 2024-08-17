import { ChatMessageDTO } from "../dto/ChatMessageDTO"
import { IChatMessageRepository } from "../../domain/repositories/IChatMessageRepository"
import { ICacheRepository } from "../../domain/repositories/ICacheRepository"
import { OpenAIService } from "../../infrastructure/services/OpenAIService"
import { ProfanityFilterService } from "../../infrastructure/services/ProfanityFilterService"

export class SendMessageUseCase {
  constructor(
    private openAIService: OpenAIService,
    private chatMessageRepository: IChatMessageRepository,
    private cacheRepository: ICacheRepository,
    private profanityFilterService: ProfanityFilterService
  ) {}

  async execute(userMessage: string): Promise<ChatMessageDTO> {
    const cleanMessage = this.profanityFilterService.clean(userMessage)
    const cachedResponse = this.cacheRepository.get(cleanMessage)

    if (cachedResponse) {
      return new ChatMessageDTO(userMessage, cachedResponse, new Date())
    }

    const botResponse = await this.openAIService.getResponse(cleanMessage)
    this.cacheRepository.set(cleanMessage, botResponse)

    const chatMessage = new ChatMessageDTO(userMessage, botResponse, new Date())
    await this.chatMessageRepository.save(chatMessage)

    return chatMessage
  }
}
