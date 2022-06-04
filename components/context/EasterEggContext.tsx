import React from "react";

// Easter egg tracker
export interface EasterEggContextInterface {
    eggCount: number;
    isMaxEggs: boolean;
    updateEggCount: (newCount: number) => void; 
  }
  
export const EasterEggContext = React.createContext<EasterEggContextInterface | null>(null)