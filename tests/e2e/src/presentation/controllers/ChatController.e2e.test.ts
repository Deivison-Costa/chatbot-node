import request from "supertest"
import { describe, it, expect, vi } from "vitest"
import express from "express"
import { chatController } from "../../../../../src/shared/kernel"

describe("ChatController E2E", () => {
  const app = express()
  app.use(express.json())
  app.post("/chat", (req, res) => chatController.handle(req, res))

  it("should return a cached response if available", async () => {
    const cacheRepository = chatController['sendMessageUseCase']['cacheRepository']
    cacheRepository.set("hello", "cached response")

    const response = await request(app)
      .post("/chat")
      .send({ message: "hello" })

    expect(response.status).toBe(200)
    expect(response.body.botResponse).toBe("cached response")
  })

  it("should return a new response if not cached", async () => {
    const openAIService = chatController['sendMessageUseCase']['openAIService']
    const getResponseSpy = vi.spyOn(openAIService, 'getResponse').mockResolvedValue("new response from OpenAI")

    const response = await request(app)
      .post("/chat")
      .send({ message: "new message" })

    expect(response.status).toBe(200)
    expect(response.body.botResponse).toBe("new response from OpenAI")
    getResponseSpy.mockRestore()
  })
})
