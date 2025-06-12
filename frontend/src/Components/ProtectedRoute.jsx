import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Service/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  // Usuário não autenticado → vai para /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Usuário autenticado, mas sem permissão → também vai para /login
  if (!allowedRoles.includes(user.tipo)) {
    return <Navigate to="/login" replace />;
  }

  // Tudo certo → renderiza as rotas aninhadas
  return <Outlet />;
};

export default ProtectedRoute;