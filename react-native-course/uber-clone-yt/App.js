import { Provider } from 'react-redux';
import HomeScreen from "./screens/HomeScreen";
import { store } from './store';
import "./tailwind.css";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

