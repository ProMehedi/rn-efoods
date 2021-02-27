import React, { useState } from 'react';
import * as Font from 'expo-font';
import { useScreen } from 'react-native-screens'
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigations/MealsNavigator';
import { combineReducers, createStore } from 'redux';
import mealReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

useScreen;

const rootRuducer = combineReducers({
  meals: mealReducer
});

const store = createStore(rootRuducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return(
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  );
}
