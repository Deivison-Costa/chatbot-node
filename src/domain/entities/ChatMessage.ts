export class ChatMessage {
  constructor(
    public readonly userMessage: string,
    public readonly botResponse: string,
    public readonly timestamp: Date
  ) {}
}
