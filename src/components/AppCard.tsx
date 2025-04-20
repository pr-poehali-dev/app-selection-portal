import React from 'react';
import { AppType } from '@/types/app';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

type AppCardProps = {
  app: AppType;
  isSelected: boolean;
  onToggle: () => void;
  categoryName: string;
};

export const AppCard = ({ app, isSelected, onToggle, categoryName }: AppCardProps) => {
  return (
    <Card 
      className={`relative w-[280px] flex-shrink-0 transition-all ${
        isSelected ? 'ring-2 ring-purple-500 bg-purple-50' : 'hover:shadow-md'
      }`}
    >
      <CardContent className="p-4">
        <div className="absolute top-3 right-3">
          <Checkbox 
            checked={isSelected} 
            onCheckedChange={onToggle}
            className="h-5 w-5 border-gray-300"
          />
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1 rounded-lg p-2 bg-purple-100 flex items-center justify-center">
            {app.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg truncate" title={app.name}>{app.name}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2" title={app.description}>
              {app.description}
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {app.size}
              </Badge>
              <Badge 
                variant="secondary" 
                className="text-xs bg-purple-100 text-purple-800"
              >
                {categoryName}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
