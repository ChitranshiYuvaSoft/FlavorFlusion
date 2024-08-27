import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <MantineProvider>

    <App />
    </MantineProvider>
    </Provider>
  </StrictMode>,
)
