# 📖 LMS Cristiano Online — React + Vite + Tailwind + shadcn/ui

Una **plataforma de cursos cristianos online** diseñada como un **Learning Management System (LMS)** moderno, modular y escalable.  
Desarrollada con **React + Vite**, estilizada con **TailwindCSS** y potenciada por **shadcn/ui** para ofrecer una experiencia limpia, elegante y responsiva.  
Los cursos se presentan como videos alojados en **YouTube**, con integración simulada (dummy data) a la espera de conectarse a un backend REST real.

---

## ✨ Objetivo del proyecto

Brindar una aplicación base que permita ofrecer cursos cristianos online a través de videos, organizada por roles de usuario y con una estructura pensada para escalar hacia un entorno de producción con autenticación real, analítica y gestión completa.

---

## ⚙️ Tecnologías principales

- **React 18 + Vite** — Renderizado rápido y modular.
- **TailwindCSS** — Sistema de diseño flexible y moderno.
- **shadcn/ui** — Componentes reutilizables y accesibles (botones, formularios, modales, etc.).
- **React Router** — Navegación por portales y dashboards.
- **Zustand** — Gestión ligera de estado global.
- **Axios** — Simulación de llamadas REST.
- **Recharts** — Gráficas para métricas y analíticas.

---

## 🧭 Estructura de carpetas

'''
src/
├─ components/ → Componentes reutilizables (UI, Navbar, Sidebar, etc.)
├─ pages/ → Vistas de cada tipo de usuario
│ ├─ public/
│ ├─ student/
│ ├─ teacher/
│ ├─ admin/
│ └─ tech/
├─ layouts/ → Layouts generales (público y dashboards)
├─ routes/ → Configuración de rutas principales
├─ data/ → Archivos JSON simulando datos del backend
├─ hooks/ → Hooks personalizados (auth, fetch, etc.)
├─ utils/ → Funciones auxiliares (formateo, métricas, etc.)
└─ main.jsx → Punto de entrada de la app
'''

---

## 🧩 Roles y portales

### 1. **Portal público**
- Página principal con banner de cursos.
- Detalle de curso (video YouTube + descripción + autor).
- Secciones de “Sobre nosotros” y “Contacto”.

### 2. **Dashboard de estudiante**
- Lista de cursos inscritos.
- Seguimiento de progreso (% completado).
- Perfil personal y notas.

### 3. **Dashboard de profesor**
- Crear/editar/eliminar cursos (dummy).
- Ver lista de estudiantes por curso.
- Estadísticas simples por curso.

### 4. **Dashboard de administrador**
- Gestión de usuarios y roles.
- Métricas globales: cursos activos, usuarios, vistas.
- Visualización de popularidad de cursos.

### 5. **Dashboard técnico**
- Visualización de logs simulados.
- Endpoints más usados.
- Métricas con gráficas (Recharts).

---

## 💾 Datos simulados (Dummy Data)

Los archivos JSON se encuentran en `src/data/`:
- `courses.json` → Cursos disponibles.
- `users.json` → Usuarios con roles.
- `progress.json` → Progreso por usuario y curso.
- `metrics.json` → Actividad y rendimiento de endpoints.

Estos datos serán reemplazados por peticiones REST reales en futuras integraciones.

---

## 🔐 Autenticación simulada

El sistema incluye autenticación dummy mediante **Zustand**, que asigna roles:
- `public`
- `student`
- `teacher`
- `admin`
- `tech`

Cada rol ve un dashboard diferente.  
Las rutas están protegidas condicionalmente según el rol activo.

---

## 🎨 Diseño visual

- Uso completo de **TailwindCSS** con modo oscuro opcional.
- Componentes de **shadcn/ui**:
  - `Button`, `Card`, `Input`, `Select`, `Badge`, `Modal`, `Toast`.
- Estilo sobrio y moderno, pensado para lectura cómoda y accesibilidad.

---

## 🚀 Scripts de desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
