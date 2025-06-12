import ProductList from "./components/ProductList";
import productos from "./data/dataProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <ProductList itemList={productos} />
            <Footer />
        </>
    );
}

export default App;
