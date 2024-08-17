import { describe, it, expect } from "vitest"
import { ProfanityFilterService } from "../../../../../src/infrastructure/services/ProfanityFilterService"

describe("ProfanityFilterService", () => {
  it("should censor profane words", () => {
    const service = new ProfanityFilterService()
    const cleanText = service.clean("you little fucker")

    expect(cleanText).toMatch(/you little [^\w\s]{2,}er/)
  })

  it("should not censor clean text", () => {
    const service = new ProfanityFilterService()
    const cleanText = service.clean("hello, how are you?")

    expect(cleanText).toBe("hello, how are you?")
  })
})
