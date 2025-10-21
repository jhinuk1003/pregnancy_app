import { useState } from 'react';
import {
  Heart,
  Baby,
  Activity,
  Bot,
  Video,
  MessageCircle,
  Calendar,
  Mail,
  Music,
  Pill,
  BarChart3,
  Cpu,
  Menu,
  X,
  Home,
  Settings,
  Bell,
  User,
  LogOut,
  Search,
} from 'lucide-react';

type Page = 'landing' | 'home' | 'about' | 'features' | 'pricing' | 'signin' | 'signup' | 'dashboard';

interface DashboardPageProps {
  onNavigate: (page: Page) => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const dashboardFeatures = [
    {
      id: 'embryo',
      icon: <Baby className="w-6 h-6" />,
      title: 'Embryo Tracking',
      description: 'Week 24 - Baby is growing strong',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    },
    {
      id: 'health',
      icon: <Activity className="w-6 h-6" />,
      title: 'Health Monitoring',
      description: 'All vitals normal',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    },
    {
      id: 'chatbot',
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Chatbot',
      description: 'Ask any pregnancy question',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      id: 'telemedicine',
      icon: <Video className="w-6 h-6" />,
      title: 'Telemedicine',
      description: 'Schedule consultation',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    },
    {
      id: 'doctor-chat',
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Chat with Doctor',
      description: '2 unread messages',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      id: 'calendar',
      icon: <Calendar className="w-6 h-6" />,
      title: 'Calendar System',
      description: 'Next appointment: Tomorrow',
      color: 'from-orange-500 to-rose-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      id: 'newsletter',
      icon: <Mail className="w-6 h-6" />,
      title: 'Newsletter',
      description: 'Weekly health tips',
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    },
    {
      id: 'music',
      icon: <Music className="w-6 h-6" />,
      title: 'Music for Baby',
      description: 'Curated playlists',
      color: 'from-violet-500 to-pink-500',
      bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    },
    {
      id: 'medicine',
      icon: <Pill className="w-6 h-6" />,
      title: 'Medicine Tracker',
      description: 'Next dose in 2 hours',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Analysis',
      description: 'View health insights',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
    {
      id: 'iot',
      icon: <Cpu className="w-6 h-6" />,
      title: 'IoT Integration',
      description: '3 devices connected',
      color: 'from-slate-500 to-gray-500',
      bgColor: 'bg-slate-50 dark:bg-slate-900/20',
    },
  ];

  const sidebarMenu = [
    { id: 'overview', icon: <Home className="w-5 h-5" />, label: 'Overview' },
    { id: 'profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
    { id: 'notifications', icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex h-screen">
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-20'
          } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              {sidebarOpen && (
                <div className="flex items-center space-x-2">
                  <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                  <span className="text-xl font-bold text-gradient">MOMIQ</span>
                </div>
              )}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {sidebarMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center ${
                  sidebarOpen ? 'space-x-3 px-4' : 'justify-center'
                } py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => onNavigate('home')}
              className={`w-full flex items-center ${
                sidebarOpen ? 'space-x-3 px-4' : 'justify-center'
              } py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
            >
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">Logout</span>}
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-auto">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Welcome back, Sarah!
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Here's your maternal health overview
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Bell className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
              </div>
            </div>
          </header>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Baby's Growth</h3>
                  <Baby className="w-8 h-8 text-rose-500" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">24 Weeks</div>
                <p className="text-gray-600 dark:text-gray-400">Size of a cantaloupe</p>
                <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-rose-500 to-pink-500 w-3/5"></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Health Score</h3>
                  <Activity className="w-8 h-8 text-rose-500" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">98%</div>
                <p className="text-gray-600 dark:text-gray-400">Excellent condition</p>
                <div className="mt-4 flex space-x-2">
                  <div className="flex-1 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Next Appointment
                  </h3>
                  <Calendar className="w-8 h-8 text-rose-500" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">Tomorrow</div>
                <p className="text-gray-600 dark:text-gray-400">Dr. Smith - 10:00 AM</p>
                <button className="mt-4 w-full py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
                  View Details
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Your Dashboard
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dashboardFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`${feature.bgColor} rounded-2xl p-6 hover-lift cursor-pointer border border-transparent hover:border-rose-200 dark:hover:border-rose-800 transition-all`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                    <button className="mt-4 text-rose-500 hover:text-rose-600 font-semibold text-sm">
                      Open →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
                  <p className="opacity-90">
                    Chat with our AI assistant or schedule a consultation with a doctor
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-white text-rose-500 rounded-lg hover:shadow-xl transition-all font-semibold">
                    Chat Now
                  </button>
                  <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition-all font-semibold">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
