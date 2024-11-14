import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/route.tsx';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/Store/Store.ts';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster />
    </Provider>
  </StrictMode>
);
