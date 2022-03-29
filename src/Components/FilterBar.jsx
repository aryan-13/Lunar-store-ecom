import React from 'react'

function FilterBar() {
  return (
    <div>
        <div className="filter-bar">
        <div className="flex-row filter-header">
          <h4 className="heading-5 bold-2">Filters</h4>
          <button className="btn-2 btn-underlined">Clear all</button>
        </div>
        <hr/>
        <div className="u-margin-bottom-small"></div>

        <div className="filter-price">
          <p className="p-md">Price</p>
          <div className="u-margin-bottom-small"></div>
          <div className="u-margin-bottom-small"></div>

          <label className="radio-list">One
            <input type="radio" checked="checked" name="radio"/>
            <span className="radio"></span>
          </label>
          <label className="radio-list">Two
            <input type="radio" name="radio"/>
            <span className="radio"></span>
          </label>

        </div>
        <hr/>
        <div className="u-margin-bottom-small"></div>

        <div className="filter-category">
          <p className="p-md">Category</p>
          <div className="u-margin-bottom-small"></div>
          <div className="u-margin-bottom-small"></div>

          <label className="check-list">Jeans
            <input type="checkbox" checked="checked"/>
            <span className="checkmark"></span>
          </label>
          <label className="check-list">Tshirts
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <label className="check-list">Shirts
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <label className="check-list">Jackets
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
        </div>
        <hr/>
        <div className="u-margin-bottom-small"></div>

        <div className="filter-rating">
          <p className="p-md">Rating</p>
          <div className="u-margin-bottom-small"></div>
          <div className="u-margin-bottom-small"></div>

          <div className="slider-container">
            <input type="range" list="tickmarks" min="10" max="50" step="10" className="slider"/>
            <datalist id="tickmarks">
              <option value="10"></option>
              <option value="20"></option>
              <option value="30"></option>
              <option value="40"></option>
              <option value="50"></option>
            </datalist>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default FilterBar