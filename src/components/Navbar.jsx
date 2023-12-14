import { useState } from "react";
import { CORE_CONCEPTS } from "../assets/data";
import "./Navbar.css";
import TabButton from "./TabButton";
import Header from "./Header";
import TodoList from "./ToDo/TodoList";

function Navbar() {

  const [selectedTopic, setSelectedTopic] = useState();

  const HandleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <h2>Welcome In My Web Site</h2>;

  const renderSwitch = () => {
    switch (selectedTopic) {
      case "Menu": return <Header
        title={CORE_CONCEPTS[selectedTopic].title}
        description={CORE_CONCEPTS[selectedTopic].description}
      />
      case "Home": return <Header
        title={CORE_CONCEPTS[selectedTopic].title}
        description={CORE_CONCEPTS[selectedTopic].description}
      />
      case "ToDo": return <TodoList />;
      case "About": return <Header
        title={CORE_CONCEPTS[selectedTopic].title}
        description={CORE_CONCEPTS[selectedTopic].description}
      />
      case "XO_App": return <Header
        title={CORE_CONCEPTS[selectedTopic].title}
        description={CORE_CONCEPTS[selectedTopic].description}
      />
      default: return <h1>Welcome In My Web Site</h1>
    }
  }

  return (
    <>
      <nav>
        <ul>
          <TabButton isSelect={selectedTopic === 'Menu'} onSelect={() => HandleClick('Menu')}>Menu</TabButton>
          <TabButton isSelect={selectedTopic === 'Home'} onSelect={() => HandleClick('Home')}>Home</TabButton>
          <TabButton isSelect={selectedTopic === 'ToDo'} onSelect={() => HandleClick('ToDo')}>ToDo</TabButton>
          <TabButton isSelect={selectedTopic === 'About'} onSelect={() => HandleClick('About')}>About</TabButton>
          {/* <TabButton isSelect={selectedTopic === 'XO App'} onSelect={() => HandleClick('XO_App')}>XO App</TabButton> */}

        </ul>
      </nav>
      {renderSwitch()}
    </>
  );
}

export default Navbar;
