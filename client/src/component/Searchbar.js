import React from 'react'

export const Searchbar = (props) => {

const handleChange = (event)=>{
props.search(event.target.value)
}
  return (
    <div className="search-bar">
    <div className="input-group md-form form-sm form-2 pl-0">
      <input
        className="form-control my-0 py-1 red-border"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(event)=>handleChange(event)}
      />
      <div className="input-group-append">
        <span
          className="input-group-text red lighten-3"
          id="basic-text1"
        >
          <i className="fas fa-search text-grey" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>

  )
}



