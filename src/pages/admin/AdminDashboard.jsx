import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Administrativo</h1>
        <p className="text-gray-600">Gestiona la plataforma de cursos cristianos</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Total Estudiantes</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">1,247</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Cursos Activos</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Profesores</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">18</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Certificados Emitidos</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">856</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Users */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Usuarios Recientes</h2>
          
          <div className="space-y-4">
            {[
              { name: 'María López', role: 'Estudiante', time: 'Hace 15 minutos' },
              { name: 'Carlos Ramírez', role: 'Estudiante', time: 'Hace 3 horas' },
              { name: 'Ana García', role: 'Profesor', time: 'Hace 1 día' }
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{user.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Cursos Recientes</h2>
          
          <div className="space-y-4">
            {[
              { title: 'Fe y Ciencia', students: 24, status: 'Publicado' },
              { title: 'Fundamentos de la Fe Cristiana', students: 32, status: 'Publicado' },
              { title: 'Liderazgo Cristiano Efectivo', students: 18, status: 'En revisión' }
            ].map((course, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{course.title}</p>
                  <p className="text-xs text-gray-500">{course.students} estudiantes</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded ${
                  course.status === 'Publicado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {course.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Acciones Rápidas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="border rounded-lg p-4 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>Gestionar Cursos</span>
          </button>
          <button className="border rounded-lg p-4 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <Users className="w-5 h-5 text-green-600" />
            <span>Administrar Usuarios</span>
          </button>
          <button className="border rounded-lg p-4 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <Award className="w-5 h-5 text-purple-600" />
            <span>Emitir Certificados</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

// Import needed for the component
import { BookOpen, Users, Award } from 'lucide-react';