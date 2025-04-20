import { ReactNode } from "react";

export type AppType = {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  size: string;
  category: string;
};

export type PresetType = {
  id: string;
  name: string;
  apps: string[];
};
