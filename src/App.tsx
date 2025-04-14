import { ThemeConfigContext } from "@cocokits/react-components";
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { FormField, Label, Input , IconButton , SvgIcon } from "@cocokits/react-components";

import './App.css'


function App() {
  return (
    <ThemeConfigContext.Provider value={framesXThemeConfig}>
     <FormField size="md">
        <Label>Label</Label>
        <Input placeholder="Placeholder" />
      </FormField>
      <IconButton type="default" size="md" color="brand">
      <SvgIcon icon="YOUR_ICON" />
    </IconButton>
    </ThemeConfigContext.Provider>
  );
}

export default App;
