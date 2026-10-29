import { useState } from 'react';
import './AttendancePage.css';

export default function AttendancePage() {
  const [view, setView] = useState('attendance');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="attendance-page">
      <div className="attendance-header">
        <div>
          <h2>Control de Asistencia</h2>
          <p className="attendance-meta">sin asistencia registrada</p>
        </div>
        <div className="attendance-controls">
          <label className="date-label">
            Fecha:
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          </label>
          <button className={`toggle-btn ${view === 'attendance' ? 'active' : ''}`} onClick={() => setView('attendance')}>
            Asistencia
          </button>
          <button className={`toggle-btn ${view === 'report' ? 'active' : ''}`} onClick={() => setView('report')}>
            Reporte
          </button>
          <button className={`toggle-btn ${view === 'history' ? 'active' : ''}`} onClick={() => setView('history')}>
            Historial
          </button>
        </div>
      </div>

      <div className="table-wrap">
        <p className="empty">
          El contenido de asistencia se mostrará aquí una vez que se conecte la base de datos.
        </p>
      </div>
    </div>
  );
}
