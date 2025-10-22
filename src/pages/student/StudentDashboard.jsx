import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function StudentDashboard() {
  return (
    <DashboardLayout role="student">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard del Estudiante</h1>
        <p className="text-gray-600">Bienvenido a tu espacio de aprendizaje personalizado</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Cursos Activos</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Completados</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Horas Estudiadas</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Certificados</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">1</p>
        </div>
      </div>

      {/* My Courses */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Mis Cursos</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-medium">
            Ver todos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course 1 */}
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=200&h=120&fit=crop" 
                alt="Fe y Ciencia"
                className="w-24 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Fe y Ciencia</h3>
                <p className="text-sm text-gray-600 mb-2">Pastor Juan Martínez</p>
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progreso</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: '45%' }}
                    ></div>
                  </div>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Continuar
                </button>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=200&h=120&fit=crop" 
                alt="Fundamentos de la Fe"
                className="w-24 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Fundamentos de la Fe Cristiana</h3>
                <p className="text-sm text-gray-600 mb-2">Dra. María González</p>
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progreso</span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Actividad Reciente</h2>
        
        <div className="space-y-4">
          {[
            { action: 'Completó la lección', course: 'Fe y Ciencia', time: 'Hace 2 horas' },
            { action: 'Inició el curso', course: 'Fundamentos de la Fe Cristiana', time: 'Hace 1 día' },
            { action: 'Obtuvo un certificado', course: 'Introducción a la Biblia', time: 'Hace 3 días' }
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 pb-4 border-b last:border-b-0">
              <div className="bg-indigo-100 p-2 rounded-full">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900">
                  <span className="font-medium">{activity.action}</span> {activity.course}
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

// Import needed for the component
import { BookOpen } from 'lucide-react';