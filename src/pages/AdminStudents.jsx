import './AdminStudents.css';

export default function AdminStudents() {
  return (
    <div className="admin-students">
      <div className="page-header">
        <h2>Estudiantes</h2>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Carrera</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="empty">
                No hay estudiantes cargados.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
