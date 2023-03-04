import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../redux/Slice/api';
import './ProductDetail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/Slice/cartSlice';
import Rating from '@mui/material/Rating';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  const productRelate = items.filter((item) => item.brand === product.brand);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };
  const options = {
    value: 3,
    readOnly: true,
    precision: 0.5,
  };
  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set('rating', rating);
    myForm.set('comment', comment);
    myForm.set('productId', params.id);

    // dispatch(newReview(myForm));
    setShow(false);
  };

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/products/find/${params.id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [params.id]);
  return (
    <div className="container product_details-container">
      {isLoading ? (
        <h2 className="text-center">Loading</h2>
      ) : (
        <Fragment>
          <div className="row product_detail">
            <div className="col-4">
              <img src={product.image ? product.image.url : ''} alt="" />
            </div>
            <div className="col-8">
              <h2>{product.name}</h2>
              <h4>$ {product.price}</h4>
              <h3>Stock: {product.stock}</h3>
              <div className="rating">
                Rating: <Rating {...options} />
              </div>
              <div className="buttons">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-secondary"
                >
                  ADD TO CART
                </button>
                <Link to="/" className="btn btn-primary">
                  BUY IT NOW
                </Link>
              </div>
              <Button
                className="mt-4 btn btn-info"
                variant="primary"
                onClick={handleShow}
              >
                Review
              </Button>

              <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Submit Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Rating
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    size="large"
                  />

                  <textarea
                    className="submitDialogTextArea"
                    cols="30"
                    rows="5"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={reviewSubmitHandler}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="row mb-5">{product.desc}</div>
          <h3 className="text-center">Relate product</h3>
          <div className="products ">
            {productRelate.slice(0, 4).map((product, index) => (
              <div key={index} className="product">
                <div className="product_img">
                  <img src={product.image.url} alt={product.name} />
                </div>
                <Link to={`/product/${product._id}`}>
                  <span>{product.name}</span>
                </Link>
                <div className="details">
                  <span className="price">$ {product.price}</span>
                  <div>
                    <AddCircleOutlineIcon
                      onClick={() => handleAddToCart(product)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ProductDetail;
