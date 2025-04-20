import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { AppType } from '@/types/app';

interface AppCardProps {
  app: AppType;
  isSelected: boolean;
  onToggle: () => void;
}

export const AppCard: React.FC<AppCardProps> = ({
  app,
  isSelected,
  onToggle
}) => {
  return (
    <Card className={`overflow-hidden transition-all duration-200 ${
      isSelected ? 'border-purple-500 shadow-md' : 'border-gray-200'
    }`}>
      <div className="flex">
        <CardHeader className="flex-1 py-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id={`app-${app.id}`} 
              checked={isSelected}
              onCheckedChange={onToggle}
            />
            <CardTitle className="text-lg">{app.name}</CardTitle>
          </div>
          <CardDescription className="mt-2 text-sm text-gray-600">
            {app.description}
          </CardDescription>
        </CardHeader>
        <div className="flex items-center justify-center p-4">
          <div className="w-12 h-12 flex items-center justify-center">
            {app.icon}
          </div>
        </div>
      </div>
      <CardFooter className="bg-gray-50 py-2 px-4">
        <span className="text-xs text-gray-500">Размер: {app.size}</span>
      </CardFooter>
    </Card>
  );
};
