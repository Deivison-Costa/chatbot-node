import { Request, Response } from "express"
import { SendMessageUseCase } from "../../application/use-cases/SendMessageUseCase"

export class ChatController {
  constructor(private sendMessageUseCase: SendMessageUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    const { message } = req.body
    const chatMessageDTO = await this.sendMessageUseCase.execute(message)
    res.json(chatMessageDTO)
  }
}