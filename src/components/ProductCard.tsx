interface ProductCardProps {
  name: string
  price: number
  image: string
  isAdded: boolean
  onToggle: () => void
}

function ProductCard({ name, price, image, isAdded, onToggle }: ProductCardProps) {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={name} />

      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">Rp {price.toLocaleString('id-ID')}</p>
      </div>

      <div className="card-footer">
        {isAdded ? (
          <button type="button" className="btn btn-added" onClick={onToggle}>
            Added ✓
          </button>
        ) : (
          <button type="button" className="btn btn-add" onClick={onToggle}>
            Add to Cart
          </button>
        )}
      </div>
    </article>
  )
}

export default ProductCard
