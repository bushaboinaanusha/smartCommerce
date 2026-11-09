import {getProducts} from '../data/products'
import {Link} from 'react-router-dom'


export default function Home(){
    const products = getProducts();
    return(
        <div className="page">
           <div className="home-hero">
            <h1 className="home-title">Welcome To SmartCommerce</h1>
                  <p className="home-subtitle">Elevate your everyday shopping</p>
           </div>
           <div className="container">
            <h2 className="page-title">Products</h2>
            <div className="product-grid">
               {
                products.map((product)=>(
                    <div key={product.id} className="product-card">
                    <img src={product.image} className="product-card-image"/>
                    <div calssName="product-card-content">
                        <h3 className="product-card-name">{product.name}</h3>
                        <p className="product-card-price">₹{product.price}</p>
                        <div className="product-card-actions">
                        <Link className="btn btn-secondary">View Details</Link>
                        <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                    </div>
                ))

               }
            </div>
           </div>
        </div>
    )
}