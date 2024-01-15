import { IProduct } from "../../../interfaces";

interface IProductListProp {
  products: Array<IProduct>;
}

export default function ProductList({ products }: IProductListProp) {
  return (
    <div className="ProductList">
      {products.map((product, index) => {
        return (
          <div className="ListItem" key={index}>
            <div className="ImageContainer">
              <img className="Image" src={product.imageUrl} alt="" />
            </div>
            <div className="Details">
              <div style={{ width: "100%" }}>
                <div className="Name">{product.productName}</div>
                <div className="Description">{product.description}</div>
                <div className="MoreDetails">
                  <div className="Price">${product.price}</div>
                  <div className="DetailsClickable">Details</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
