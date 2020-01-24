import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
)

serviceWorker.unregister()
