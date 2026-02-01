import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface Child {
  name: string;
  dob: string;
  parent: string;
}

interface ChildContextType {
  children: Child[];
  addChild: (child: Child) => void;
}

const ChildContext = createContext<ChildContextType | undefined>(undefined);

export function ChildProvider({ children }: { children: ReactNode }) {
  const [childList, setChildList] = useState<Child[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("children");
    if (stored) {
      setChildList(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("children", JSON.stringify(childList));
  }, [childList]);

  const addChild = (child: Child) => {
    setChildList((prev) => [...prev, child]);
  };

  return (
    <ChildContext.Provider value={{ children: childList, addChild }}>
      {children}
    </ChildContext.Provider>
  );
}

export function useChild() {
  const context = useContext(ChildContext);
  if (!context) {
    throw new Error("useChild must be used inside ChildProvider");
  }
  return context;
}
