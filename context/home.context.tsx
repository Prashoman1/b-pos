"use client";

import { createContext, useContext } from "react";
import useFullScreen from "./useFullScreen.hook";
import useDarkMood from "./useDarkMood.hook";
import useKeywordPress from "./useKeywordPress";

const HomeContext = createContext(undefined);

export default function HomeContextProvider({ children }: any) {
  /***********************************/
  /* use this pattern  */
  const fullScreenState = useFullScreen();
  /***********************************/
  const darkMoodState = useDarkMood();
  const keywordPressKey = useKeywordPress();

  return (
    <HomeContext.Provider
      value={
        {
          ...fullScreenState,
          ...darkMoodState,
          ...keywordPressKey
        } as any
      }
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHomeContext must be used within a PosContextProvider");
  }

  return useContext(HomeContext);
}
