import { createContext, ReactNode, useContext, useState } from 'react';

interface MarkdownProviderProps {
  children: ReactNode;
}

interface MarkdownContextProps {
  markdown: string;
  setMarkdown: (value: string) => void
}

const MarkdownContext = createContext({} as MarkdownContextProps);

export default function MarkdownProvider({ children }: MarkdownProviderProps) {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  )

}

export function useMarkdown() {
  return useContext(MarkdownContext);
}