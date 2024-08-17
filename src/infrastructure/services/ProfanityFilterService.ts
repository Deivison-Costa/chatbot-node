import {
    RegExpMatcher,
    TextCensor,
    englishDataset,
    englishRecommendedTransformers,
  } from "obscenity"
  
  export class ProfanityFilterService {
    private matcher = new RegExpMatcher({
      ...englishDataset.build(),
      ...englishRecommendedTransformers,
    })
    private censor = new TextCensor()
  
    clean(text: string): string {
      const matches = this.matcher.getAllMatches(text)
      return this.censor.applyTo(text, matches)
    }
  }
  