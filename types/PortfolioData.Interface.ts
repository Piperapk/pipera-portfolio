import { Button } from "../components/buttons/Button_Badge";

// Types for the portfolio work cards
export interface PortfolioWork {
    title: string
    textCase: string
    textOutcome: string
    tagButtons: Button[]
    linkButtons: Button[]
    localImageUrl: string
  }
  
export interface PortfolioWorks {
  id: number
  attributes: PortfolioWork
}

// Types for the open source work cards
export interface OpenSourceWork {
  title: string
  textBody: string
  tagButtons: Button[]
  linkButtons: Button[]
}

export interface OpenSourceWorks {
id: number
attributes: OpenSourceWork
}