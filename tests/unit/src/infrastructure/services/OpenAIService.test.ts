import { describe, it, expect, vi } from "vitest"
import axios from "axios"
import { OpenAIService } from "../../../../../src/infrastructure/services/OpenAIService"

vi.mock("axios")

describe("OpenAIService", () => {
  it("should return a response from OpenAI API", async () => {
    const mockResponse = {
      data: {
        choices: [{ message: { content: "mocked response" } }],
      },
    }
    ;(axios.post as any).mockResolvedValue(mockResponse)

    const service = new OpenAIService()
    const response = await service.getResponse("Hello")

    expect(response).toBe("mocked response")
    expect(axios.post).toHaveBeenCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello" }],
      },
      expect.any(Object)
    )
  })
})
