# Open Gospel LMS - Sistema de Gestión de Aprendizaje Cristiano

## Resumen del Proyecto

He creado un sistema completo de gestión de aprendizaje (LMS) para una plataforma de cursos cristianos online con las siguientes características:

### Estructura del Proyecto
- **React + Vite** como base del proyecto
- **TailwindCSS** para estilos modernos y responsivos  
- **Estructura modular** organizada en carpetas:
  - `src/components/` - Componentes reutilizables
  - `src/pages/` - Páginas por rol de usuario
  - `src/layouts/` - Layouts compartidos
  - `src/routes/` - Configuración de rutas
  - `src/data/` - Datos dummy simulados

### Características Implementadas

#### 1. Ruteo y Navegación
- Sistema completo de enrutamiento con React Router DOM
- Rutas para todos los roles: público, estudiante, profesor, administrador, técnico
- `AppRouter.jsx` que maneja todas las rutas principales

#### 2. Dashboards por Rol
**Portal Público:**
- `HomePage.jsx` - Página principal con secciones de hero, estadísticas y cursos destacados

**Dashboard Estudiante:**
- `StudentDashboard.jsx` - Panel de control con estadísticas, cursos activos y actividad reciente

**Dashboard Profesor:**
- `TeacherDashboard.jsx` - Gestión de cursos y estudiantes

**Dashboard Administrador:**
- `AdminDashboard.jsx` - Control general del sistema con usuarios y cursos recientes

**Dashboard Técnico:**
- `TechDashboard.jsx` - Monitoreo del sistema con métricas y registros

#### 3. Componentes Base
- `Navbar.jsx` - Barra de navegación
- `Sidebar.jsx` - Menú lateral personalizado por rol
- `PublicLayout.jsx` - Layout para portal público
- `DashboardLayout.jsx` - Layout compartido para dashboards con sidebar y header diferenciados

#### 4. Datos Dummy Simulados
- `courses.json` - Cursos cristianos con información de YouTube
- `users.json` - Usuarios con roles diferentes (estudiante, profesor)
- `progress.json` - Progreso académico de estudiantes
- `metrics.json` - Métricas del sistema para el dashboard técnico

#### 5. Integración REST Preparada
Los archivos JSON están listos para ser reemplazados por llamadas HTTP a un backend real:
- Cursos: `/api/courses`
- Usuarios: `/api/users` 
- Progreso: `/api/progress`
- Métricas: `/api/metrics`

### Tecnologías Utilizadas
- React (v18+)
- Vite
- TailwindCSS
- React Router DOM
- Zustand (para manejo de estado)
- Lucide React (iconos)
- Axios (comunicación HTTP)

## Estructura del Proyecto Final

```
src/
├── components/          
│   ├── Navbar.jsx       # Barra de navegación
│   └── Sidebar.jsx      # Menú lateral
├── pages/               
│   ├── public/          
│   │   └── HomePage.jsx # Portal público
│   ├── student/         
│   │   └── StudentDashboard.jsx  # Dashboard estudiante
│   ├── teacher/         
│   │   └── TeacherDashboard.jsx  # Dashboard profesor
│   ├── admin/           
│   │   └── AdminDashboard.jsx    # Dashboard administrador
│   └── tech/            
│       └── TechDashboard.jsx     # Dashboard técnico
├── layouts/             
│   ├── PublicLayout.jsx # Layout para portal público
│   └── DashboardLayout.jsx # Layout para dashboards
├── routes/              
│   └── AppRouter.jsx    # Enrutador principal
├── data/                
│   ├── courses.json     # Cursos
│   ├── users.json       # Usuarios
│   ├── progress.json    # Progreso de usuarios
│   └── metrics.json     # Métricas del sistema
└── utils/               
```

## Próximos Pasos para Integración REST

1. Reemplazar importaciones de datos dummy por llamadas HTTP a APIs reales
2. Implementar autenticación simulada con Zustand o Context API
3. Agregar funcionalidades específicas según el rol del usuario
4. Mejorar la experiencia de usuario con animaciones y transiciones

El proyecto está completamente listo para futura integración REST real, con una estructura clara que facilitará la migración desde los datos dummy a llamadas reales al backend.