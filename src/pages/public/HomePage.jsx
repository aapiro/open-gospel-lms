import React from 'react';
import { BookOpen, Users, Award, Calendar, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bienvenido a la Academia Cristiana</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Cursos cristianos de calidad para fortalecer tu fe y conocimiento bíblico
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explorar Cursos
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Aprender Más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Cursos Disponibles</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
              <p className="text-gray-600">Estudiantes</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,500+</h3>
              <p className="text-gray-600">Certificados Emitidos</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Cursos Destacados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestros cursos más populares diseñados para fortalecer tu fe y conocimiento bíblico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=400&fit=crop" 
                alt="Curso de Fe y Ciencia"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mb-3">Teología</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fe y Ciencia</h3>
                <p className="text-gray-600 mb-4">
                  Curso introductorio sobre la relación entre fe cristiana y ciencia moderna.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">12 lecciones</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=800&h=400&fit=crop" 
                alt="Fundamentos de la Fe"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-3">Teología</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fundamentos de la Fe Cristiana</h3>
                <p className="text-gray-600 mb-4">
                  Introducción a los principios básicos del cristianismo.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">16 lecciones</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=400&fit=crop" 
                alt="Liderazgo Cristiano"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3">Liderazgo</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Liderazgo Cristiano Efectivo</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo de habilidades de liderazgo basadas en principios bíblicos.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">10 lecciones</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
              Ver todos los cursos
              <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu camino espiritual?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Únete a nuestra comunidad de aprendices y fortalece tu fe con nuestros cursos especializados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Registrarse Ahora
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contactar a un Tutor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}