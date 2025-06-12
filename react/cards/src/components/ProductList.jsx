import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ itemList }) {
    return (
        <section className="product-list">
            {itemList.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </section>
    );
}

export default ProductList;
