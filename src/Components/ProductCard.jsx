import React from 'react'

function ProductCard({product}) {
  return (
    <div>
                <div className="vertical-card">
          <div className="card-img">
            <img src={product.image} alt="" />
          </div>
          <div className="card-text">
            <h3 className="card-title">{product.name}</h3>
            <div className="card-price">
              {product.discountPrice} <span className="card-price-striked">{product.price}</span>
            </div>
          </div>
          <div className="card-btn">
            <div className="button-box">
              <a href="" className="btn btn-primary btn-sm">ADD TO CART</a>
              <i className="fa fa-shopping-cart btn-box-icon btn-sm"></i>
            </div>
            <a href="" className="btn btn-tertiary-icon card-btn-icon"><i className="fas fa-heart"></i></a>
          </div>
        </div>
    </div>
  )
}

export default ProductCard