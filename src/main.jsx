import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter basename='/airplane-model-store2-stylization2-v2'>
			<App />
		</BrowserRouter>
	</StrictMode>
)
