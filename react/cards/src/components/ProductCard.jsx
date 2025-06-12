import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <article className="product-card">
            <img
                src={product.img}
                alt={"imagen de " + product.nombre}
                className="product-img"
            />
            <div>
                <span>${product.precio}</span>
                <h3>{product.nombre}</h3>
                <p>{product.descripcion}</p>
            </div>
            <button className="product-btn">Agregar al carrito</button>
        </article>
    );
}

export default ProductCard;
