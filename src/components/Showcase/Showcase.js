import { useState } from 'react';
import { Times } from 'react-lodash';

import { Modal, Button } from 'react-bootstrap';
import _ from 'lodash';

import './showcase.css';

export default function Showcase(props) {
  var products = props.products;

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (item) => {
    setSelectedItem(item);
    handleShow();
  };

  const getProductImage = (drive_id) => {
    var url = 'https://drive.google.com/uc?export=view&id=' + drive_id;
    return url;
  };

  return (
    <div className="display">
      <ItemModal
        item={selectedItem}
        show={show}
        handleClose={handleClose}
        addToCart={props.addToCart}
        getProductImage={getProductImage}
      />
      <div>
        <h3>{products.length} Results</h3>
      </div>
      <div className="showcaseList">
        {products.map((product) => (
          <div
            key={product.id}
            className="showcaseItem"
            onClick={() => openModal(product)}
          >
            <div className="showcaseZoom"></div>
            <div className="showcaseImage">
              <img
                src={getProductImage(product.images[0]['Cover'])}
                alt={product.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/no-image.jpg';
                }}
              />
            </div>
            <div className="showcaseTopNote">{product.note}</div>
            <div className="showcaseTitle">
              <span>{product.title}</span>
            </div>
            <div className="showcasePrice">
              <span>{'$' + product.price.toFixed(2)}</span>
            </div>
            <div className="showcaseColours">
              <small>{product.colors.length + ' COLOURS'}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ItemModal = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState();

  const handleQryChange = () => {};

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const colors = {
    Black: '#000',
    White: '#fff',
    Blue: '#00f',
    Red: '#f00',
    Green: '#0f0',
    Yellow: '#ff0',
    Grey: '#ccc',
    Brown: '#452209',
  };

  const getColorByName = (color) => {
    return colors[color];
  };

  const getImageByColor = () => {
    console.log(props.item.images);
    var image = _.filter(Object.values(props.item.images), (img) => {
      //   if (Object.keys(img)[0] == selectedColor)

      console.log('Color', Object.keys(img)[0]);
      return Object.keys(img)[0] == selectedColor;
    });

    console.log('image', image[0]);

    if (image.length) return props.getProductImage(image[0][selectedColor]);
    else props.getProductImage(props.item.images[0]['Cover']);
  };

  return props.item ? (
    <Modal
      show={props.show}
      onHide={() => {
        setSelectedColor(null);
        props.handleClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="product-modal">
        <div className="product-modal-images">
          <div>
            <img
              src={
                selectedColor
                  ? getImageByColor()
                  : props.getProductImage(props.item.images[0]['Cover'])
              }
              alt={props.item.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/no-image.jpg';
              }}
            />
          </div>
          <div>buttons</div>
        </div>
        <div className="product-modal-info">
          <div className="product-modal-note">
            <span>{props.item.note}</span>
          </div>
          <div className="product-modal-title">
            <span>{props.item.title}</span>
          </div>
          <div className="product-modal-price">
            <span>{'$' + props.item.price.toFixed(2)}</span>
          </div>
          <div className="product-modal-hr">
            <hr />
          </div>
          <div className="product-modal-colorFilter">
            Colors
            <div>
              {props.item.colors.map((color) => (
                <div
                  key={color}
                  id={color}
                  style={{ backgroundColor: getColorByName(color) }}
                  className={selectedColor == color ? 'selectedColor' : ''}
                  onClick={(e) => {
                    handleColorChange(e.target.id);
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="product-modal-Selector">
            Size and quantity(1 a 10) selector
            <div>
              <div>
                <span>Size</span>
                <br />
                <select name="sizes">
                  <option value="" key="none">
                    Select
                  </option>
                  {props.item.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                {' '}
                <span>Quantity</span>
                <br />
                <select
                  name="quantity"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                >
                  <Times
                    n={10}
                    iteratee={(n) => (
                      <option value={n + 1} key={'qty' + n}>
                        {n + 1}
                      </option>
                    )}
                  />
                </select>
              </div>
            </div>
          </div>
          <div className="product-modal-addBtn">
            <button
              onClick={() => {
                props.addToCart({ item: props.item, quantity: quantity });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  ) : (
    <></>
  );
};
