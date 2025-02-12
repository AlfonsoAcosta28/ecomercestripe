import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        {/* <div className="categories-container grid grid-cols-3 gap-4 justify-items-center mt-6"> */}
          <div className="category-container">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="h-[150px] w-[200px] object-cover rounded-md shadow-lg"
            />
            <div className="product-details">
              <p className="product-name">{name}</p>
              <p className="product-price">${price}</p>
            </div>
          </div>

        {/* </div> */}
      </Link>
    </div>
  )
}

export default Product