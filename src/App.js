import { Footer } from "./components/footer/Footer";
import {  Navbarr } from "./components/navbar/Navbarr";
import { Main } from "./components/main/Main";
import "./App.css";

function App() {
  return (
   <>
   <Navbarr/>
   <Main/>
   <div class="footer">
      <Footer/>
   </div>
   </>
  );
}

export default App;
