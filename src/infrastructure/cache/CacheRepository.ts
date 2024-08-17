import { ICacheRepository } from "../../domain/repositories/ICacheRepository"
import NodeCache from "node-cache"

export class CacheRepository implements ICacheRepository {
  private cache = new NodeCache({ stdTTL: 600 })

  get(key: string): string | undefined {
    return this.cache.get(key)
  }

  set(key: string, value: string): void {
    this.cache.set(key, value)
  }
}