'use client';

import { createContext, ReactNode, useState } from 'react';

type tabStrType = 'rec' | 'fol';

export const TabContext = createContext<{
  tab: tabStrType;
  setTab: (_value: tabStrType) => void;
}>({
  tab: 'rec',
  setTab: () => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState<tabStrType>('rec');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
