import { ThemeConfigContext } from "@cocokits/react-components";
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { Button, Checkbox } from '@cocokits/react-components';
import { FormField, Label, Input } from "@cocokits/react-components";
import './App.css'


function App() {
  return (
    <ThemeConfigContext.Provider value={framesXThemeConfig}>
          <Button>Hello</Button>
          <Checkbox>This is a checkbox</Checkbox>
          <FormField>
        <Label>place</Label>
        <Input type="time" required placeholder="Placeholder" />
      </FormField>
    </ThemeConfigContext.Provider>
  );
}

export default App;
