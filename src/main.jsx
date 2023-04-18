import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux' // this provides the global state to the app

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
