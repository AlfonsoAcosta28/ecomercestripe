import Product from './Product';

const MayYouLike = ({ products }) => {
    return (
        <div>
            <div className="maylike-products-wrapper">
                <div className='heading'>
                    <h2>También podría gustarte</h2>
                </div>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MayYouLike
