// import logo from './logo.svg';
import "./App.css";
import ShoppingCard from "./Components/ShoppingCard/ShoppingCard";
import ExploreThemes from "./Containers/ExploreThemes/ExploreThemes";
import ProductPage from './Containers/ProductPage/ProductPage';
import BrowseTheme from './Components/BrowseTheme/BrowseTheme';

function App() {
  return (
    <>
      {/* <ShoppingCard /> */}
      {/* <ExploreThemes /> */}
      <BrowseTheme />
      <ProductPage />
    </>
  );
}

export default App;
