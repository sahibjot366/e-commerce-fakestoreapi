import React from 'react'
import { RootNavigator } from './src/navigation/root-navigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App=()=>{
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App;