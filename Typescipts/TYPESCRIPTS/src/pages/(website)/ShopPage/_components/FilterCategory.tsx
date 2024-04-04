import { Link } from "react-router-dom"

const FilterCategory = () => {
  return (
    <>
      <div className="category">
        <div className="category_list">
            <Link to={`categorydetail`}></Link>
        </div>
      </div>
    </>
  )
}

export default FilterCategory
