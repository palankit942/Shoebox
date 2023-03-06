import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext/cart-context.js";
import { useOrder } from "../../context/orderContext/orderContext.js";
import "./orderSummary.css";

export const OrderSummary = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const {
    orderState: { orders },
  } = useOrder();
  const latestOrder = orders.find((order) => order.orderId === orderId);

  return (
    <div className="page-wrapper">
      <section className="main-section order-summary-container">
        {latestOrder ? (
          <>
            <h2 className="order-summary-heading">
              Order Successfully Placed ✅
            </h2>
            <div className="order-summary-wrapper">
              <div>
                <div className="order" key={latestOrder?.paymentId}>
                  <div className="order-items">
                    <div className="item-name">Payment ID:</div>
                    <div className="pl-2">{latestOrder?.paymentId}</div>
                  </div>

                  <div className="order-items">
                    <div className="item-name">Order ID:</div>
                    <div className="pl-2">{latestOrder?.orderId}</div>
                  </div>

                  <div className="order-items">
                    <div className="item-name">Amount Paid:</div>
                    <div className="pl-2">Rs. {latestOrder?.amount}</div>
                  </div>

                  <div className="order-items">
                    <div className="item-name">Address:</div>
                    <div>{`${latestOrder?.delivery.fullName}, (${latestOrder.delivery?.contact}),
                                         ${latestOrder?.delivery.house}, ${latestOrder.delivery?.area},
                                          ${latestOrder?.delivery.city} - ${latestOrder.delivery?.pincode}, 
                                          ${latestOrder?.delivery.state}`}</div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div>
                    {latestOrder?.products.items.map((product) => (
                      <div key={latestOrder?.orderId} className="order-product">
                        <img
                          src={product.prodImage}
                          alt={product.title}
                          className="resp-img"
                        />

                        <div className="ordered-item-detailing">
                          <div className="font-bold text-md">
                            {product.title}
                          </div>
                          <div>{product.author}</div>

                          <div className="order-items">
                            <div className="item-name">Price:</div>
                            <div className="placed-price">
                              Rs.{product.price}
                            </div>
                          </div>

                          <div className="order-items">
                            <div className="item-name qty-placed">Qty:</div>
                            <div className="qty-placed">{product.qty}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="oops-error text text-md">
            <p>Something Went Wrong ❌</p>
          </div>
        )}
        <div className="w-100p flex justify-center">
          <button
            onClick={() => {
              navigate("/product");
              cartDispatch({
                type: "RESET-CART",
              });
            }}
            className="btn btn-success"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    </div>
  );
};
