import React from 'react'

export const Usernames = (props) => {

const handleuserclick = (event)=>{
  console.log(event)
  props.onuserclick(event.target.value,event.target.name)
}
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
    {props.searchfilter.map((items,index) => {
      return (
        <li key={index} className="nav-item" role="presentation">
          <button
            value={items.username}
            onClick={handleuserclick}
            name={items._id}
            className="nav-link active tab-btn"
            id="home-tab"
            type="button"
          >
            {" "}
            <img
            style={{width:"40px",height:"46px",borderRadius:"100%"}}
              src={items.avatar}
              alt="img"
            />
            {items.username}
          </button>
        </li>
      );
    })}
    </ul>
  )
}
