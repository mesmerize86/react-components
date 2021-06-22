import "./styles.css";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./Theme/defaultTheme";
import { blueTheme } from "./Theme/blueTheme";

import ToggleButton from "./FormComponents/ToggleButton";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <ToggleButton />
      </ThemeProvider>
    </div>
  );
}
