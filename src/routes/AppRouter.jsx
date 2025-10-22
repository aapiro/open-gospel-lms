import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import StudentDashboard from '../pages/student/StudentDashboard';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import TechDashboard from '../pages/tech/TechDashboard';
import HomePage from '../pages/public/HomePage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='/student/*' element={<StudentDashboard />} />
        <Route path='/teacher/*' element={<TeacherDashboard />} />
        <Route path='/admin/*' element={<AdminDashboard />} />
        <Route path='/tech/*' element={<TechDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}