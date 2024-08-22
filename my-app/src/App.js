import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;
