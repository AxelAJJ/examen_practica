import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h2>Panel de Administración</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-num">0</span>
          <span className="stat-label">Cursos</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">0</span>
          <span className="stat-label">Estudiantes</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">0</span>
          <span className="stat-label">Materias</span>
        </div>
        <div className="stat-card">
          <span className="stat-num">0</span>
          <span className="stat-label">Asistencias</span>
        </div>
      </div>

      <div className="admin-actions">
        <button className="action-btn" onClick={() => navigate('/admin/students')}>
          Estudiantes
        </button>
        <button className="action-btn" onClick={() => navigate('/admin/classes')}>
          Cursos
        </button>
      </div>

      <div className="recent-section">
        <h3>Últimas actividades</h3>
        <p className="empty">Aquí se mostrará el historial de actividades.</p>
      </div>
    </div>
  );
}
