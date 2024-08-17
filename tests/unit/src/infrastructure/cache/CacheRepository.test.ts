import { describe, it, expect } from "vitest"
import { CacheRepository } from "../../../../../src/infrastructure/cache/CacheRepository"

describe("CacheRepository", () => {
  it("should store and retrieve a value from cache", () => {
    const cacheRepository = new CacheRepository()
    cacheRepository.set("key", "value")

    const cachedValue = cacheRepository.get("key")
    expect(cachedValue).toBe("value")
  })

  it("should return undefined for a missing key", () => {
    const cacheRepository = new CacheRepository()
    const cachedValue = cacheRepository.get("missingKey")

    expect(cachedValue).toBeUndefined()
  })
})
