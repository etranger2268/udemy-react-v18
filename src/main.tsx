import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root Element is not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
