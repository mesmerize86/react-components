import "./styles.css";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./Theme/defaultTheme";

import ToggleButton from "./FormComponents/ToggleButton";

export default function App() {
  const handleChange = (event) => {
    console.log(event.target);
  };
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <ToggleButton
          labelChecked="Yes"
          labelUnchecked="No"
          buttonID="checkbox_1"
          handleToggleChange={handleChange}
          defaultState="true"
        />
        <ToggleButton buttonID="checkbox_2" handleToggleChange={handleChange} />
      </ThemeProvider>
    </div>
  );
}
