import axios from "axios"

export class OpenAIService {
  private readonly apiKey: string = process.env.OPENAI_API_KEY || ""

  async getResponse(message: string): Promise<string> {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    )
    return response.data.choices[0].message.content
  }
}
