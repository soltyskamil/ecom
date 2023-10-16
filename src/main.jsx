import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './reducers/StateProvider.jsx'
import { reducer, initialState } from './reducers/reducer.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initalState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
