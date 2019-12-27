import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProductAsync } from "../../actions/index";
import styles from "./Product.module.scss";

const Product = ({ ...props }) => {
  const { dispatch, product } = props;
  useEffect(() => {
    dispatch(loadProductAsync(Math.floor(Math.random() * 654)));
}, [dispatch]);

  return (
    <>
      <div>
          <img src={product.img} alt="weed"/>
        <h2 className={styles.name}>{product.name}</h2>
      </div>

      <div>
        <h4>Type:</h4>
        <p>{product.type}</p>
        <h4>Taste like:</h4>
        <p>{product.tastes_like}</p>
        <h4>THC Content:</h4>
        <p>{product.thc_content}</p>
        <h4>CBD Content:</h4>
        <p>{product.cbd_content}</p>
        <h4>Conditions Helps With:</h4>
        <div className={styles.conditions}>
          {product.conditions.map(condition => {
            return (
              <p>
                {condition.name}
                <span>,</span> &nbsp;{" "}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { product: state.product };
};

export default connect(mapStateToProps)(Product);
