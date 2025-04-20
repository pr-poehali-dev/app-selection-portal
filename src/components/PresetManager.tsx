import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { PresetType } from '@/types/app';
import { X } from 'lucide-react';

type PresetManagerProps = {
  presets: PresetType[];
  selectedApps: string[];
  onSavePreset: (name: string) => void;
  onLoadPreset: (presetId: string) => void;
  onDeletePreset: (presetId: string) => void;
};

export const PresetManager = ({ 
  presets, 
  selectedApps, 
  onSavePreset, 
  onLoadPreset,
  onDeletePreset
}: PresetManagerProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [presetName, setPresetName] = useState('');

  const handleSavePreset = () => {
    if (presetName.trim()) {
      onSavePreset(presetName.trim());
      setPresetName('');
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          onClick={() => setIsDialogOpen(true)} 
          disabled={selectedApps.length === 0}
          variant="outline" 
          className="bg-white hover:bg-purple-50"
        >
          Сохранить пресет
        </Button>
        
        {presets.map(preset => (
          <div key={preset.id} className="relative inline-block">
            <Button 
              onClick={() => onLoadPreset(preset.id)} 
              variant="outline" 
              className="bg-white hover:bg-purple-50 pr-8"
            >
              {preset.name} ({preset.apps.length})
            </Button>
            <Button 
              onClick={() => onDeletePreset(preset.id)} 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full w-8 p-0 hover:bg-red-50 hover:text-red-500"
            >
              <X size={14} />
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Сохранить пресет</DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <Input
              placeholder="Введите название пресета"
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-2">
              Выбрано приложений: {selectedApps.length}
            </p>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleSavePreset} disabled={!presetName.trim() || selectedApps.length === 0}>
              Сохранить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
