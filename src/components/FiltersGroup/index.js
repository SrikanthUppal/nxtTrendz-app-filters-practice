import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          className="search-bar"
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoriesItems = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name is-active'
        : 'category-name'
      const onChangeCategory = () => changeCategory(category.categoryId)
      console.log(activeCategoryId)
      return (
        <li
          className="category-item"
          onClick={onChangeCategory}
          key={category.categoryId}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesItems()}</ul>
    </>
  )

  const renderRatingItems = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {activeRatingId, changeRating} = props
      const onClickRating = () => {
        changeRating(rating.ratingId)
      }
      const isActive = rating.ratingId === activeRatingId
      const ratingClassName = isActive
        ? 'rating-name is-active-rating'
        : 'rating-name'
      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRating}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-stars"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingList = () => (
    <>
      <h1 className="rating-heading">Ratings</h1>
      <ul className="ratings-list">{renderRatingItems()}</ul>
    </>
  )

  const onClickClear = () => {
    const {clearFilters} = props
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategories()}
      {renderRatingList()}
      <button type="button" onClick={onClickClear} className="clear-btn">
        Clear filters
      </button>
    </div>
  )
}

export default FiltersGroup
