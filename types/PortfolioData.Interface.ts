import { Button } from "../components/buttons/Button_Badge";

// Types for the portfolio work cards
export interface PortfolioWork {
    title: string
    textBodyCase: string
    textBodyOutcome: string
    tagButtons: Button[]
    linkButtons: Button[]
    image: string
  }
  
export interface PortfolioWorks {
  id: number
  attributes: PortfolioWork
}