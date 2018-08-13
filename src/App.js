import './ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Stack from './Navigation/Navigation';

import { store, persistor } from './Store/store';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Stack />
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
