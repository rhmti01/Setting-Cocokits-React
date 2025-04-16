import { ThemeConfigContext } from "@cocokits/react-components";
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { Button, Checkbox , Toggle  } from '@cocokits/react-components';

import './App.css'

function App() {
  return (
    <ThemeConfigContext.Provider value={framesXThemeConfig}>
      <h1>cocokits react</h1>
      <Button>Hello</Button>
      <Checkbox>This is a checkbox</Checkbox>
      

      <Toggle type="knob" size="md" labelPosition="before">
        Slide Me!
      </Toggle>

    </ThemeConfigContext.Provider>
  );
}

export default App;