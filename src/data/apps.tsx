import React from 'react';
import { AppType } from '@/types/app';
import { 
  Gamepad2, 
  MessageSquare, 
  Music, 
  Film, 
  ShoppingCart 
} from 'lucide-react';

export const apps: AppType[] = [
  {
    id: 'steam',
    name: 'Steam',
    description: 'Платформа для игр, магазин и сообщество. Доступ к тысячам игр от AAA до инди.',
    icon: <Gamepad2 className="w-8 h-8 text-blue-600" />,
    size: '120 МБ'
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Приложение для общения голосом, текстом и видео. Идеально для геймеров и сообществ.',
    icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
    size: '80 МБ'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Музыкальный стриминговый сервис с миллионами песен, подкастов и плейлистов.',
    icon: <Music className="w-8 h-8 text-green-500" />,
    size: '150 МБ'
  },
  {
    id: 'netflix',
    name: 'Netflix',
    description: 'Приложение для стриминга фильмов и сериалов с большой библиотекой контента.',
    icon: <Film className="w-8 h-8 text-red-600" />,
    size: '100 МБ'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'Удобный онлайн-шоппинг с миллионами товаров, доставкой и отзывами покупателей.',
    icon: <ShoppingCart className="w-8 h-8 text-yellow-600" />,
    size: '70 МБ'
  }
];
