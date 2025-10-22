import React from 'react';
import { BookOpen, Users, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Academia Cristiana</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Inicio</a>
            <a href="/cursos" className="text-gray-700 hover:text-indigo-600 font-medium">Cursos</a>
            <a href="/acerca" className="text-gray-700 hover:text-indigo-600 font-medium">Acerca de</a>
            <a href="/contacto" className="text-gray-700 hover:text-indigo-600 font-medium">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600 font-medium">Iniciar Sesión</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Registrarse
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Inicio</a>
              <a href="/cursos" className="text-gray-700 hover:text-indigo-600 font-medium">Cursos</a>
              <a href="/acerca" className="text-gray-700 hover:text-indigo-600 font-medium">Acerca de</a>
              <a href="/contacto" className="text-gray-700 hover:text-indigo-600 font-medium">Contacto</a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <button className="text-gray-700 hover:text-indigo-600 font-medium text-left">Iniciar Sesión</button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Registrarse
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}