import { useState, useEffect } from "react";
import _ from "lodash";

import SideNav from "./components/SideNav/SideNav";
import Showcase from "./components/Showcase/Showcase";

import Container from "react-bootstrap/Container";

import data from "./data.json";

import "./styles/store.css";

import {
  colorsFilterInitialState,
  pricesFilterInitialState,
} from "./constants/filters";

const filtersInitialState = {
  pricesFilter: pricesFilterInitialState,
  colorsFilter: colorsFilterInitialState,
  sizesFilter: null,
  orderBy: "Newly Added",
};

const Home = (props) => {
  const [filters, setFilters] = useState({ ...filtersInitialState });

  const resetFilters = (currentFilters) => {
    setFilters({
      ...currentFilters,
      orderBy: "Newly Added",
    });

    // console.log("current", currentFilters)
    currentFilters.orderBy = "Newly Added";

    _.forEach(currentFilters.colorsFilter, (color) => {
      color.active = false;
    });

    getProducts(null);
  };

  const handleOrderFilterChange = (filters, value) => {
    var newFilters = { ...filters, orderBy: value };
    setFilters(newFilters);
    getProducts(newFilters);
  };

  const handleColorFilterChange = (filters, color) => {
    var newColors = [...filters.colorsFilter];
    newColors[newColors.indexOf(color)].active = !color.active;
    var newFilters = { ...filters, colorsFilter: newColors };
    setFilters(newFilters);
    getProducts(newFilters);
  };

  const handlePricesFilterChange = (filters, price) => {
    var newPrices = [...filters.pricesFilter];
    newPrices[newPrices.indexOf(price)].active = !price.active;
    var newFilters = { ...filters, pricesFilter: newPrices };
    console.log(newFilters)
    setFilters(newFilters);
    getProducts(newFilters);
  };

  const handleSizeFilterChange = (filters, color) => {
    var newColors = [...filters.colorsFilter];
    newColors[newColors.indexOf(color)].active = !color.active;
    var newFilters = { ...filters, colorsFilter: newColors };
    setFilters(newFilters);
    getProducts(newFilters);
  };

  const filtersActions = {
    resetFilters: resetFilters,
    handleOrderFilterChange: handleOrderFilterChange,
    handleColorFilterChange: handleColorFilterChange,
    handlePricesFilterChange: handlePricesFilterChange,
    handleSizeFilterChange: handleSizeFilterChange,
  };

  const [state, setState] = useState({
    cart: [],
    products: [],
    menuState: props.menuState,
  });

  const orderBy = (prods, order) => {
    var ordered = [];
    switch (order) {
      case "Newly Added":
        ordered = _.orderBy(prods, ["dataAdded"]);
        return ordered;
      case "Low to High":
        ordered = _.orderBy(prods, ["price"], ["asc", "desc"]);
        return ordered;
      case "High to Low":
        ordered = _.orderBy(prods, ["price"], ["desc", "asc"]);
        return ordered;
      default:
        return prods;
    }
  };

  const getProducts = (filters = null) => {
    var filtered = data;
    console.log("aqui");
    if (filters) {
      //Filter By Category

      //Filter By Color
      var activeColors = _.filter(filters.colorsFilter, (color) => {
        return color.active === true;
      });

      if (activeColors.length) {
        filtered = _.filter(data, (product) => {
          var include = false;
          for (let c in activeColors) {
            if (product.colors.includes(activeColors[c].value)) include = true;
          }

          return include;
        });
      }

      //Filter By Price
      var activePrice = _.filter(filters.pricesFilter, (price) => {
        return price.active === true;
      });

      if (activePrice.length) {
        filtered = _.filter(filtered, (product) => {
        //   var include = false;

          console.log("active", activePrice);

        //   return include;
          return true;
        });
      }

      //Filter By Size

      var ordered = orderBy(filtered, filters.orderBy);

      setState({ ...state, products: ordered });
    } else {
      var ordered = orderBy(filtered, "Newly Added");
      setState({ ...state, products: ordered });
    }

    // console.log(filtered)
  };
  //product import here
  useEffect(() => {
    getProducts();
    return () => {
      props.cart.closeMenu();
    };
  }, []);

  //filters here

  return (
    <Container>
      <div className="store">
        <SideNav filtersActions={filtersActions} filters={filters} />{" "}
        <Showcase addToCart={props.cart.addToCart} products={state.products} />{" "}
      </div>{" "}
    </Container>
  );
};

export default Home;
