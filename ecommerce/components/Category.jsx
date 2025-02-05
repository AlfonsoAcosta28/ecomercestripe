
const Category = ({visibleCategories}) => {
    return (
        
        <div className="categories-container grid grid-cols-3 gap-4 justify-items-center mt-6">
            {visibleCategories.map((category, index) => (
                <div className="category-container" key={index}>
                    <img
                        src={`/${category}.jpg`}
                        alt={category}
                        className="h-[150px] w-[200px] object-cover rounded-md shadow-lg"
                    />
                    <div className="text-center font-bold p-2">{category}</div>
                </div>
            ))}
        </div>
    )
}

export default Category
