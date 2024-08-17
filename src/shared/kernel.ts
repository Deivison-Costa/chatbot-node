import { OpenAIService } from "../infrastructure/services/OpenAIService"
import { CacheRepository } from "../infrastructure/cache/CacheRepository"
import { ChatMessageRepository } from "../infrastructure/persistence/ChatMessageRepository"
import { ProfanityFilterService } from "../infrastructure/services/ProfanityFilterService"
import { SendMessageUseCase } from "../application/use-cases/SendMessageUseCase"
import { ChatController } from "../presentation/controllers/ChatController"

export const openAIService = new OpenAIService()
export const cacheRepository = new CacheRepository()
export const chatMessageRepository = new ChatMessageRepository()
export const profanityFilterService = new ProfanityFilterService()

export const sendMessageUseCase = new SendMessageUseCase(
  openAIService,
  chatMessageRepository,
  cacheRepository,
  profanityFilterService
)

export const chatController = new ChatController(sendMessageUseCase)
