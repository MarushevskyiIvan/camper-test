import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { GlobalStyles } from './GlobalStyles.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<BrowserRouter
				basename={import.meta.env.BASE_URL}
				// basename='/camper-test'
			>
				<App />
			</BrowserRouter>
			{/* </PersistGate> */}
		</Provider>
		<GlobalStyles />
	</React.StrictMode>
)
