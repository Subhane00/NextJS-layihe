import { productType } from '@/types/productType'
import Link from './Link'
const SingleProduct = ({id, title, price, image}: productType) => {
  return (
    <>
 <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
  <img height={200} style={{objectFit:'contain'}} src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{price}</p>
    <Link href={`/product/${id}`} className="btn btn-primary">View Details</Link>
  </div>
</div>
 </div>

    
    </>
  )
}

export default SingleProduct