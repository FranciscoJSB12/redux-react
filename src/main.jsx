import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

const store = createStore(pokemonsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
