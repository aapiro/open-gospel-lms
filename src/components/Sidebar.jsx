import React from 'react';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  FileText,
  Award,
  Calendar,
  User,
  Menu,
  X
} from 'lucide-react';

export default function Sidebar({ role }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Menú según el rol del usuario
  const menuItems = {
    student: [
      { name: 'Dashboard', icon: BarChart3, path: '/student' },
      { name: 'Mis Cursos', icon: BookOpen, path: '/student/courses' },
      { name: 'Progreso', icon: Calendar, path: '/student/progress' },
      { name: 'Perfil', icon: User, path: '/student/profile' }
    ],
    teacher: [
      { name: 'Dashboard', icon: BarChart3, path: '/teacher' },
      { name: 'Mis Cursos', icon: BookOpen, path: '/teacher/courses' },
      { name: 'Estudiantes', icon: Users, path: '/teacher/students' },
      { name: 'Contenido', icon: FileText, path: '/teacher/content' }
    ],
    admin: [
      { name: 'Dashboard', icon: BarChart3, path: '/admin' },
      { name: 'Cursos', icon: BookOpen, path: '/admin/courses' },
      { name: 'Usuarios', icon: Users, path: '/admin/users' },
      { name: 'Certificados', icon: Award, path: '/admin/certificates' },
      { name: 'Configuración', icon: Settings, path: '/admin/settings' }
    ],
    tech: [
      { name: 'Dashboard', icon: BarChart3, path: '/tech' },
      { name: 'Métricas', icon: BarChart3, path: '/tech/metrics' },
      { name: 'Logs', icon: FileText, path: '/tech/logs' }
    ]
  };

  const currentMenuItems = menuItems[role] || [];

  return (
    <aside className="w-64 bg-gray-900 min-h-screen text-white hidden md:block">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Panel de {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
            <p className="text-xs text-gray-400">Academia Cristiana</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {currentMenuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.path}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-64 p-6 border-t border-gray-800">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}