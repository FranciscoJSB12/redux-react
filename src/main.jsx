import React from 'react'
import ReactDOM from 'react-dom/client'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import App from './App'

const store = createStore(pokemonsReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
