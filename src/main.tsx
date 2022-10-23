import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BuzzFeedProvider } from './context/BuzzFeedProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BuzzFeedProvider>
            <App />
        </BuzzFeedProvider>
    </React.StrictMode>
);
