import React, { useState } from 'react';
import AppSelector from '@/components/AppSelector';
import { Button } from '@/components/ui/button';
import { AppCard } from '@/components/AppCard';
import { apps } from '@/data/apps';

const Index = () => {
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  
  const toggleApp = (appId: string) => {
    setSelectedApps(prevSelected => 
      prevSelected.includes(appId)
        ? prevSelected.filter(id => id !== appId)
        : [...prevSelected, appId]
    );
  };

  const selectAll = () => {
    setSelectedApps(apps.map(app => app.id));
  };

  const unselectAll = () => {
    setSelectedApps([]);
  };

  const invertSelection = () => {
    const invertedSelection = apps
      .filter(app => !selectedApps.includes(app.id))
      .map(app => app.id);
    setSelectedApps(invertedSelection);
  };

  const loadPreset1 = () => {
    // Пресет 1: первые 3 приложения
    setSelectedApps(apps.slice(0, 3).map(app => app.id));
  };

  const downloadSelected = () => {
    const selectedAppNames = apps
      .filter(app => selectedApps.includes(app.id))
      .map(app => app.name)
      .join(', ');
    
    if (selectedApps.length === 0) {
      alert('Пожалуйста, выберите хотя бы одно приложение');
      return;
    }
    
    alert(`Скачивание и установка выбранных приложений: ${selectedAppNames}`);
    // Здесь в реальном приложении был бы код для скачивания и установки
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-purple-900">Установщик приложений</h1>
          <p className="text-lg text-gray-600">Выберите приложения для установки на ваш компьютер</p>
        </header>

        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          <Button onClick={selectAll} variant="outline" className="bg-white hover:bg-purple-50">
            Выбрать все
          </Button>
          <Button onClick={unselectAll} variant="outline" className="bg-white hover:bg-purple-50">
            Убрать все
          </Button>
          <Button onClick={invertSelection} variant="outline" className="bg-white hover:bg-purple-50">
            Инвертировать
          </Button>
          <Button onClick={loadPreset1} variant="outline" className="bg-white hover:bg-purple-50">
            Пресет 1
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {apps.map(app => (
            <AppCard
              key={app.id}
              app={app}
              isSelected={selectedApps.includes(app.id)}
              onToggle={() => toggleApp(app.id)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={downloadSelected}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg animate-pulse"
          >
            Скачать и установить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
