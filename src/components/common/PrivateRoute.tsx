import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { RootState } from '../../redux/rootReducer';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();
    const isAuthenticated = useSelector((state: RootState) => state.auth.authenticated)

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};
