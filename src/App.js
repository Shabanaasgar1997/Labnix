import Feature from "./Components/Featured Categories/Feature";
import NavbarNav from "./Components/Navbar/Navbar";
import Suggestedproducts from "./Components/Suggested Products/Suggestedproducts";
import Treading from "./Components/Treading at Labnix/Treading";

import Footer from "./Components/Footer/Footer";

import "./Components/App.css";

function App() {
  return (
    <>
      <NavbarNav />
      <Feature />
      <Treading />
      <Suggestedproducts />
      <Footer />
    </>
  );
}

export default App;
