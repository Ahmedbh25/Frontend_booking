import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import FetchDataContextProvider from './context/FetchDataContext';
import ReservationContextProvider from './context/RoomReservationContext';
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";
import RegisterContextProvider from './context/RegisterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterContextProvider>
      <AuthContextProvider>
        <SearchContextProvider>
          <ReservationContextProvider>
            <FetchDataContextProvider>
                <App />
            </FetchDataContextProvider>
          </ReservationContextProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </RegisterContextProvider>
  </React.StrictMode>
);

