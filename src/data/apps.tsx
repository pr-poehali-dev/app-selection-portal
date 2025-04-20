import React from 'react';
import { AppType } from '@/types/app';
import { 
  Gamepad2, 
  MessageSquare, 
  Music, 
  Film, 
  ShoppingCart,
  MonitorSmartphone,
  Cpu,
  HardDrive,
  Code,
  Shield,
  Tv,
  Wifi,
  LineChart,
  BarChart,
  Key
} from 'lucide-react';

export const apps: AppType[] = [
  // Программы для геймеров
  {
    id: 'steam',
    name: 'Steam',
    description: 'Платформа для игр, магазин и сообщество. Доступ к тысячам игр от AAA до инди.',
    icon: <Gamepad2 className="w-8 h-8 text-blue-600" />,
    size: '120 МБ',
    category: 'games'
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Приложение для общения голосом, текстом и видео. Идеально для геймеров и сообществ.',
    icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
    size: '80 МБ',
    category: 'communication'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    description: 'Музыкальный стриминговый сервис с миллионами песен, подкастов и плейлистов.',
    icon: <Music className="w-8 h-8 text-green-500" />,
    size: '150 МБ',
    category: 'media'
  },
  {
    id: 'netflix',
    name: 'Netflix',
    description: 'Приложение для стриминга фильмов и сериалов с большой библиотекой контента.',
    icon: <Film className="w-8 h-8 text-red-600" />,
    size: '100 МБ',
    category: 'media'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'Удобный онлайн-шоппинг с миллионами товаров, доставкой и отзывами покупателей.',
    icon: <ShoppingCart className="w-8 h-8 text-yellow-600" />,
    size: '70 МБ',
    category: 'shopping'
  },
  
  // Программы для сис-админов
  {
    id: 'msi-afterburner',
    name: 'MSI Afterburner',
    description: 'Утилита для мониторинга и разгона графических карт с расширенным управлением.',
    icon: <LineChart className="w-8 h-8 text-red-500" />,
    size: '85 МБ',
    category: 'sys-admin'
  },
  {
    id: 'crystal-disk',
    name: 'CrystalDiskInfo',
    description: 'Программа для мониторинга состояния жестких дисков и SSD через S.M.A.R.T.',
    icon: <HardDrive className="w-8 h-8 text-blue-400" />,
    size: '45 МБ',
    category: 'sys-admin'
  },
  {
    id: 'visual-studio',
    name: 'Visual Studio',
    description: 'Интегрированная среда разработки от Microsoft для создания приложений.',
    icon: <Code className="w-8 h-8 text-purple-600" />,
    size: '2.5 ГБ',
    category: 'development'
  },
  {
    id: 'putty',
    name: 'PuTTY',
    description: 'Клиент для SSH, Telnet и SFTP, позволяющий безопасно подключаться к удаленным серверам.',
    icon: <MonitorSmartphone className="w-8 h-8 text-green-600" />,
    size: '12 МБ',
    category: 'sys-admin'
  },
  {
    id: 'aida64',
    name: 'AIDA64',
    description: 'Мощный инструмент для диагностики и тестирования компьютерного оборудования.',
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    size: '120 МБ',
    category: 'sys-admin'
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    description: 'Анализатор сетевых протоколов для мониторинга и анализа сетевого трафика.',
    icon: <Wifi className="w-8 h-8 text-blue-500" />,
    size: '150 МБ',
    category: 'sys-admin'
  },
  {
    id: 'vmware',
    name: 'VMware Workstation',
    description: 'Программа для создания и запуска виртуальных машин на компьютере.',
    icon: <Tv className="w-8 h-8 text-blue-700" />,
    size: '580 МБ',
    category: 'sys-admin'
  },
  {
    id: 'malwarebytes',
    name: 'Malwarebytes',
    description: 'Антивирусное ПО для обнаружения и удаления вредоносных программ.',
    icon: <Shield className="w-8 h-8 text-blue-300" />,
    size: '210 МБ',
    category: 'security'
  },
  {
    id: 'hwmonitor',
    name: 'HWMonitor',
    description: 'Приложение для мониторинга напряжения, температуры и скорости вентиляторов.',
    icon: <BarChart className="w-8 h-8 text-yellow-500" />,
    size: '35 МБ',
    category: 'sys-admin'
  },
  {
    id: 'keepass',
    name: 'KeePass',
    description: 'Менеджер паролей с открытым исходным кодом для безопасного хранения учетных данных.',
    icon: <Key className="w-8 h-8 text-green-700" />,
    size: '22 МБ',
    category: 'security'
  }
];

export const categories = [
  { id: 'all', name: 'Все' },
  { id: 'games', name: 'Игры' },
  { id: 'communication', name: 'Коммуникации' },
  { id: 'media', name: 'Медиа' },
  { id: 'shopping', name: 'Покупки' },
  { id: 'sys-admin', name: 'Системное администрирование' },
  { id: 'development', name: 'Разработка' },
  { id: 'security', name: 'Безопасность' }
];
