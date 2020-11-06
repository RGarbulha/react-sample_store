import React from "react";

import "./sidenav.css";

export default function SideNav() {
  return (
    <div className="sidemenu">
      SideNav
      <div>
      <select name="orderBy" id="orderBy">
        <option value="latest">Newly Added</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      </div>
      <div>
          <button>Reset</button>
      </div>
      <div>
        <h4> Category </h4>
        <ul>
          <li>Pants</li>
          <ul>
            <li>Men Jeans</li>
            <li>Women Jeans</li>
          </ul>
        </ul>
      </div>
      <div>
          <h4>Price</h4>
          <div style={{display:"flex",flexDirection:"column"}}>
          <label htmlFor="priceFilter0"><input type="checkbox" name="priceFilter" id="priceFilter0" value="20-40"/>$20 - $40</label>
          <label htmlFor="priceFilter1"><input type="checkbox" name="priceFilter" id="priceFilter1" value="40-60"/>$40 - $60</label>
          <label htmlFor="priceFilter2"><input type="checkbox" name="priceFilter" id="priceFilter2" value="60-80"/>$60 - $80</label>
          </div>
      </div>
      <div>
          <h4>Color</h4>
          <div style={{display:"flex",flexDirection:"row"}}>
              <div id="black" style={{width:50,height:50,backgroundColor:"#000",borderRadius:25}}></div>
              <div id="blue"  style={{width:50,height:50,backgroundColor:"#00f",borderRadius:25}}></div>
          </div>
      </div>
      <div>
          <h4>Size</h4>
          <div>
          <label htmlFor="sizeFilter0"><input type="checkbox" name="priceFilter" id="priceFilter2" value="60-80"/>XXS</label>
          <label htmlFor="sizeFilter0"><input type="checkbox" name="priceFilter" id="priceFilter2" value="60-80"/>XS</label>
          <label htmlFor="sizeFilter0"><input type="checkbox" name="priceFilter" id="priceFilter2" value="60-80"/>S</label>
          <label htmlFor="sizeFilter0"><input type="checkbox" name="priceFilter" id="priceFilter2" value="60-80"/>M</label>
          <label htmlFor="sizeFilter0"><input type="checkbox" name="priceFilter" id="priceFilter2" value="60-80"/>L</label>
          <label htmlFor="sizeFilter0"><input type="checkbox" name="priceFilter" id="priceFilter2" value="60-80"/>XL</label>
          </div>
      </div>
    </div>
  );
}
