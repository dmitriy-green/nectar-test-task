import { configureStore } from 'redux-starter-kit'
import rootReducer from './reducers'

export function configureAppStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true
  })
}