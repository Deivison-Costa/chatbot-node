export class ChatMessageDTO {
  constructor(
    public readonly userMessage: string,
    public readonly botResponse: string,
    public readonly timestamp: Date
  ) {}
}