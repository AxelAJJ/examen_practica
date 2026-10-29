import { useAuth } from '../context/AuthContext';
import './TeacherDashboard.css';

export default function TeacherDashboard() {
  const { user } = useAuth();

  return (
    <div className="teacher-dashboard">
      <h2>Mis Cursos</h2>
      <p className="empty">
        Hola {user?.name || 'Docente'}, aquí aparecerán tus cursos.
      </p>
    </div>
  );
}
