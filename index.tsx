import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App"; // Ensure this path is correct

const MainApp = () => {
    return (
        <div>
            <App /> {/* Use the imported App component here */}
        </div>
    );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!); // Add non-null assertion since root element exists
root.render(<MainApp />);
