import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AppCard } from '@/components/AppCard';
import { PresetManager } from '@/components/PresetManager';
import { apps, categories } from '@/data/apps';
import { PresetType } from '@/types/app';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Search } from 'lucide-react';

const PRESETS_STORAGE_KEY = 'app-installer-presets';

const Index = () => {
  const [selectedApps, setSelectedApps] = useState<string[]>([]);
  const [presets, setPresets] = useState<PresetType[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Load presets from localStorage
  useEffect(() => {
    const savedPresets = localStorage.getItem(PRESETS_STORAGE_KEY);
    if (savedPresets) {
      try {
        setPresets(JSON.parse(savedPresets));
      } catch (e) {
        console.error('Failed to parse saved presets');
      }
    }
  }, []);

  // Save presets to localStorage when they change
  useEffect(() => {
    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(presets));
  }, [presets]);

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

  const savePreset = (name: string) => {
    const newPreset: PresetType = {
      id: `preset-${Date.now()}`,
      name,
      apps: [...selectedApps]
    };
    setPresets(prevPresets => [...prevPresets, newPreset]);
  };

  const loadPreset = (presetId: string) => {
    const preset = presets.find(p => p.id === presetId);
    if (preset) {
      setSelectedApps(preset.apps);
    }
  };

  const deletePreset = (presetId: string) => {
    setPresets(prevPresets => prevPresets.filter(p => p.id !== presetId));
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

  // Filter apps based on search query and active category
  const filteredApps = apps.filter(app => {
    const matchesSearch = searchQuery.trim() === '' || 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = activeCategory === 'all' || app.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-purple-900">Установщик приложений</h1>
          <p className="text-lg text-gray-600 mb-6">Выберите приложения для установки на ваш компьютер</p>
          
          <div className="max-w-md mx-auto relative mb-6">
            <Input
              placeholder="Поиск приложений..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </header>

        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-2 justify-center mb-4">
            <Button onClick={selectAll} variant="outline" className="bg-white hover:bg-purple-50">
              Выбрать все
            </Button>
            <Button onClick={unselectAll} variant="outline" className="bg-white hover:bg-purple-50">
              Убрать все
            </Button>
            <Button onClick={invertSelection} variant="outline" className="bg-white hover:bg-purple-50">
              Инвертировать
            </Button>
          </div>
          
          <PresetManager 
            presets={presets}
            selectedApps={selectedApps}
            onSavePreset={savePreset}
            onLoadPreset={loadPreset}
            onDeletePreset={deletePreset}
          />
        </div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
          <TabsList className="w-full overflow-x-auto flex-nowrap justify-start max-w-full p-1 mb-4">
            {categories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="whitespace-nowrap">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {filteredApps.length > 0 ? (
          <div className="mb-8 relative">
            <div className="flex overflow-x-auto pb-4 space-x-4 snap-x">
              {filteredApps.map(app => (
                <div key={app.id} className="snap-start">
                  <AppCard
                    app={app}
                    isSelected={selectedApps.includes(app.id)}
                    onToggle={() => toggleApp(app.id)}
                    categoryName={getCategoryName(app.category)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>Не найдено приложений по вашему запросу</p>
          </div>
        )}

        <div className="flex justify-center">
          <Button 
            onClick={downloadSelected}
            size="lg"
            disabled={selectedApps.length === 0}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center gap-2"
          >
            <Download size={20} />
            Скачать и установить ({selectedApps.length})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
