import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './Styles/GlobalStyle';
import App from './App';
import { AuthProvider } from './Service/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        
        <GlobalStyle />

        <AuthProvider>
            <App />
        </AuthProvider>
        
    </React.StrictMode>
)

reportWebVitals();
