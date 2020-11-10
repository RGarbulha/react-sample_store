import { useState, useEffect } from "react";

import "./sidenav.css";

export default function SideNav(props) {

  const resetFilters = () => {
    props.filtersActions.resetFilters(props.filters);
  };

  useEffect(() => {
    console.log(props.filters.orderBy)
  }, []);

  return (
    <div className="sidemenu">
      <div className="sidemenu-section">
        <select
          name="orderBy"
          id="orderBy"
          className="orderBy"
          value={props.filters.orderBy}
          onChange={(e) =>
            props.filtersActions.handleOrderFilterChange(
              props.filters,
              e.target.value
            )
          }
        >
          <option value="Newly Added"> Newly Added </option>{" "}
          <option value="Low to High"> Price: Low to High </option>{" "}
          <option value="High to Low"> Price: High to Low </option>{" "}
        </select>{" "}
      </div>{" "}
      <div className="sidemenu-section">
        <button className="button" onClick={resetFilters}>
          {" "}
          Reset{" "}
        </button>{" "}
      </div>{" "}
      <div className="sidemenu-section">
        <h4> Category </h4>{" "}
        <div className="category-display">
          <ul className="category-list">
            <li>
              {" "}
              <button className="category-btn"> Pants </button>
            </li>
            <ul className="category-list">
              <li>
                {" "}
                <button className="category-btn"> Men Jeans </button>
              </li>
              <li>
                {" "}
                <button className="category-btn"> Women Jeans </button>
              </li>
            </ul>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      <div className="sidemenu-section">
        <h4> Price </h4>{" "}
        <div className="sidemenu-price-filter">
          {" "}
          {props.filters.pricesFilter.map((filter, i) => (
            <label htmlFor={"priceFilter" + i}>
              {" "}
              <input
                type="radio"
                name="priceFilter"
                id={"priceFilter" + i}
                value={filter.value}
                onChange={()=>{props.filtersActions.handlePricesFilterChange(props.filters,filter)}}
              />{" "}
              {filter.text}
            </label>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="sidemenu-section">
        <h4> Color </h4>{" "}
        <div className={"sidemenu-color-display"}>
          {" "}
          {props.filters.colorsFilter.map((color, i) => (
            <div
              id={"colorFilter" + i}
              className={color.active === true ? "active-color-filter" : ""}
              style={{ backgroundColor: color.color }}
              onClick={() =>
                props.filtersActions.handleColorFilterChange(
                  props.filters,
                  color
                )
              }
            >
              {" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <div className="sidemenu-section">
        <h4> Size </h4>{" "}
        <div className="sidemenu-size-filter">
          <label htmlFor="sizeFilter0">
            {" "}
            <input
              type="checkbox"
              name="sizeFilter"
              id="sizeFilter0"
              value="XXS"
            />{" "}
            XXS{" "}
          </label>{" "}
          <label htmlFor="sizeFilter1">
            {" "}
            <input
              type="checkbox"
              name="sizeFilter"
              id="sizeFilter1"
              value="XS"
            />{" "}
            XS{" "}
          </label>{" "}
          <label htmlFor="sizeFilter2">
            {" "}
            <input
              type="checkbox"
              name="sizeFilter"
              id="sizeFilter2"
              value="S"
            />{" "}
            S{" "}
          </label>{" "}
          <label htmlFor="sizeFilter3">
            {" "}
            <input
              type="checkbox"
              name="sizeFilter"
              id="sizeFilter3"
              value="M"
            />{" "}
            M{" "}
          </label>{" "}
          <label htmlFor="sizeFilter4">
            {" "}
            <input
              type="checkbox"
              name="sizeFilter"
              id="sizeFilter4"
              value="L"
            />{" "}
            L{" "}
          </label>{" "}
          <label htmlFor="sizeFilter5">
            {" "}
            <input
              type="checkbox"
              name="sizeFilter"
              id="sizeFilter5"
              value="XL"
            />{" "}
            XL{" "}
          </label>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
