import { Header } from "./components/Header/header";
import { Home } from "./Home/page";

export default function App() {
  return (
    <div className="flex flex-col h-screen gap-8">
      <Header/>
      <Home/>
    </div>
  );
}
