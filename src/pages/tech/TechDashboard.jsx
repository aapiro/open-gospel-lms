import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';

export default function TechDashboard() {
  return (
    <DashboardLayout role="tech">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Técnico</h1>
        <p className="text-gray-600">Monitorea el rendimiento y estado del sistema</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Servicios Activos</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Usuarios Conectados</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">87</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Errores Recientes</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900">Uptime</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">99.8%</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Métricas del Sistema</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo Promedio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Último Acceso</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { endpoint: '/api/courses', hits: 230, avgResponseTime: '120ms', lastAccess: '2025-10-22' },
                { endpoint: '/api/users', hits: 145, avgResponseTime: '85ms', lastAccess: '2025-10-22' },
                { endpoint: '/api/progress', hits: 98, avgResponseTime: '67ms', lastAccess: '2025-10-22' }
              ].map((metric, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{metric.endpoint}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.hits}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.avgResponseTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.lastAccess}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Logs */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Registros Recientes</h2>
        
        <div className="space-y-4">
          {[
            { level: 'INFO', message: 'Servicio de autenticación iniciado correctamente', time: 'Hace 5 minutos' },
            { level: 'WARN', message: 'Alto uso de CPU detectado en servidor principal', time: 'Hace 15 minutos' },
            { level: 'ERROR', message: 'Error al procesar solicitud POST /api/courses', time: 'Hace 30 minutos' }
          ].map((log, index) => (
            <div key={index} className="flex items-start space-x-4 pb-4 border-b last:border-b-0">
              <span className={`px-2 py-1 text-xs rounded ${
                log.level === 'ERROR' ? 'bg-red-100 text-red-800' : 
                log.level === 'WARN' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-green-100 text-green-800'
              }`}>
                {log.level}
              </span>
              <div className="flex-1">
                <p className="text-gray-900">{log.message}</p>
                <p className="text-sm text-gray-500">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

// Import needed for the component
import { BarChart3 } from 'lucide-react';