import { ReactNode } from 'react';

export interface AppType {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  size: string;
}
