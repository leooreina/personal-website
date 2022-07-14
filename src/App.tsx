import { Content } from "./components/Content/Content";
import { Menu } from "./components/Menu/Menu";

export function App() {
  const sections = [
    'Home',
    'Work',
    'About'
  ]

  return (
    <div className="App">
      <Content/>
      <Menu sections={sections}/>
    </div>
  );
}