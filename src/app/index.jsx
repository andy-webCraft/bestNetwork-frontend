import Routing from "pages";
import { withProvides } from "./providers";
import MainLayout from "./layouts/MainLayout";
import "./styles/index.css";

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Routing />
      </MainLayout>
    </div>
  );
}

export default withProvides(App);
