import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import theme from "./themes";
import { store } from "./store";
import Home from "./components";

function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Home />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
