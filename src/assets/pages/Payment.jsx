// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "./Payment.css";

// export default function Payment() {
//     const navigate = useNavigate();
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleContinue = () => {
//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     if (paymentMethod === "bank") {
//       navigate("/payment/bank-transfer");
//     } else if (paymentMethod === "card") {
//       navigate("/payment/card");
//     } else if (paymentMethod === "delivery") {
//       navigate("/payment/cash-on-delivery");
//     }
//   };

//   return (
//     <div className="payment-page">
//       <div className="payment-container">
//         <h1>Choose Payment Method</h1>

//         <p>Select how you would like to pay for your order.</p>

//         <label className="payment-option">
//           <input
//             type="radio"
//             name="payment"
//             value="bank"
//             checked={paymentMethod === "bank"}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />

//           <div>
//             <h3>Bank Transfer</h3>
//             <p>Transfer money directly to our bank account.</p>
//           </div>
//         </label>

//         <label className="payment-option">
//           <input
//             type="radio"
//             name="payment"
//             value="card"
//             checked={paymentMethod === "card"}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />

//           <div>
//             <h3>Debit Card</h3>
//             <p>Pay securely using your debit card.</p>
//           </div>
//         </label>

//         <label className="payment-option">
//           <input
//             type="radio"
//             name="payment"
//             value="delivery"
//             checked={paymentMethod === "delivery"}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />

//           <div>
//             <h3>Cash on Delivery</h3>
//             <p>Pay when your building materials arrive.</p>
//           </div>
//         </label>

//         <button
//           className="payment-continue"
//           onClick={handleContinue}
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Payment() {
    const navigate = useNavigate();

    const {
        getCartItemsWithProducts,
        getCartTotal,
    } = useCart();

    const [paymentMethod, setPaymentMethod] = useState("");
    const [receipt, setReceipt] = useState(null);
    const [transferConfirmed, setTransferConfirmed] = useState(false);
    const [message, setMessage] = useState("");
    

    const cartItems = getCartItemsWithProducts();
    const total = getCartTotal();

    const formatPrice = (price) =>
        `₦${Number(price).toLocaleString("en-NG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;

    function handlePayment(method) {
        setPaymentMethod(method);
    }

    return (
        <div className="page">
            <div className="container">

                <h1 className="page-title">Payment</h1>

                {/* ORDER SUMMARY */}
                <section className="payment-order-summary">

                    <h2>Order Summary</h2>

                    {cartItems.length === 0 ? (
                        <div>
                            <p>Your cart is empty.</p>

                            <button
                                className="btn btn-primary"
                                onClick={() => navigate("/material")}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="payment-items">

                                {cartItems.map((item) => (
                                    <div
                                        className="payment-item"
                                        key={item.id}
                                    >
                                        <div className="payment-item-info">

                                            <img
                                                src={
                                                    item.product?.image ||
                                                    "/placeholder.png"
                                                }
                                                alt={
                                                    item.product?.name ||
                                                    "Building material"
                                                }
                                                className="payment-item-image"
                                            />

                                            <div>
                                                <h3>
                                                    {item.product?.name}
                                                </h3>

                                                <p>
                                                    Quantity: {item.quantity}
                                                </p>

                                                <p>
                                                    Unit Price:{" "}
                                                    {formatPrice(
                                                        item.product?.price ?? 0
                                                    )}
                                                </p>
                                            </div>

                                        </div>

                                        <p className="payment-item-total">
                                            {formatPrice(
                                                (item.product?.price ?? 0) *
                                                item.quantity
                                            )}
                                        </p>

                                    </div>
                                ))}

                            </div>

                            <div className="payment-total">
                                <span>Total Amount</span>

                                <strong>
                                    : {formatPrice(total)}
                                </strong>
                            </div>
                        </>
                    )}

                </section>


                {/* PAYMENT METHODS */}
                {cartItems.length > 0 && (
                    <section className="payment-method-section">

                        <h2>Select Payment Method</h2>

                        <p>
                            Choose how you would like to pay
                            for your building materials.
                        </p>

                        <div className="payment-methods">

                            <button
                                type="button"
                                className={`payment-method ${
                                    paymentMethod === "bank"
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handlePayment("bank")}
                            >
                                <span>🏦</span>

                                <span>
                                    <strong>Bank Transfer</strong>
                                    <small>
                                        Pay directly to our company account.
                                    </small>
                                </span>
                            </button>


                            <button
                                type="button"
                                className={`payment-method ${
                                    paymentMethod === "card"
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handlePayment("card")}
                            >
                                <span>💳</span>

                                <span>
                                    <strong>Debit Card</strong>
                                    <small>
                                        Pay using your debit card.
                                    </small>
                                </span>
                            </button>


                            <button
                                type="button"
                                className={`payment-method ${
                                    paymentMethod === "cash"
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handlePayment("cash")}
                            >
                                <span>🚚</span>

                                <span>
                                    <strong>Cash on Delivery</strong>
                                    <small>
                                        Pay when your order is delivered.
                                    </small>
                                </span>
                            </button>

                        </div>


                        {/* BANK TRANSFER DETAILS */}
                        {paymentMethod === "bank" && (
                            <div className="payment-details">
                                <h3>Company Bank Account</h3>

                                <p>Bank Name : YOUR COMPANY NAME</p>
                                <p>Account Name : ADFEN PRIME</p>
                                <p>Account Number : 123456789</p>

                                <p>
                                    Amount to Transfer: #{Number(total).toLocaleString("en-NG")}
                                </p>

                                <hr />

                                <h3>Confirm Your Payment</h3>

                                <label>
                                    <input type="checkbox"
                                    checked={transferConfirmed}
                                    onChange={(e) => setTransferConfirmed(e.target.checked)}
                                     />
                                     I confirm that i have the made the bank transfer.
                                </label>

                                <div style={{ marginTop: "20px"}}>
                                    <label htmlFor="paymentReceipt">
                                        Upload your payment receipt
                                    </label>

                                    <input
                                        id="paymentReceipt"
                                        type="file" 
                                        accept="image/*,.pdf" 
                                        onChange={(e) => {
                                            setReceipt(e.target.files?.[0] || null);
                                            setMessage("");
                                        }}/>
                                </div>

                                {receipt && (
                                    <p> Selected receipt: {receipt.name}</p>
                                )}

                                <p>
                                    You can confirm your transfer, upload a receipt , or do both.
                                </p>

                                <button 
                                    type="button"
                                    className="btn btn-primary btn-large"
                                    disabled={!transferConfirmed && !receipt}
                                    onClick={() => {
                                        setMessage(
                                            " Your submission is ready. Payment must be verified by the company."
                                        );
                                    }}
                                >
                                    Submit order for verification
                                </button>

                                {message && (
                                    <p className="payment-notice" role="status">
                                        {message}
                                    </p>
                                )}

                                {/* <h3>Company Bank Account</h3>

                                <p>
                                    Transfer the total amount below
                                    to the company's account.
                                </p>

                                <div className="bank-detail-row">
                                    <span>Bank Name</span>
                                    <strong>
                                        WEMA BANK
                                    </strong>
                                </div>

                                <div className="bank-detail-row">
                                    <span>Account Name</span>
                                  <strong>
                                        ADENLE FEYINTOLA
                                    </strong>
                                </div>

                                <div className="bank-detail-row">
                                    <span>Account Number</span>
                                    <strong>
                                        0283956757
                                    </strong>
                                </div>

                                <div className="bank-detail-row">
                                    <span>Amount to Transfer</span>
                                    <strong>
                                        {formatPrice(total)}
                                    </strong>
                                </div>

                                <p className="payment-notice">
                                    Please confirm the account details
                                    with your company before making
                                    the transfer.
                                </p> */}

                            </div>
                        )}


                        {/* DEBIT CARD INFORMATION */}
                        {paymentMethod === "card" && (
                            <div className="payment-details">

                                <h3>Pay with Debit Card</h3>

                                <p>
                                    You will need a secure payment gateway
                                    to accept card payments.
                                </p>

                                <p>
                                    Amount to Pay:{" "}
                                    <strong>
                                        {formatPrice(total)}
                                    </strong>
                                </p>

                                <p className="payment-notice">
                                    Card payments are not active yet.
                                    Connect a payment provider before
                                    accepting real payments.
                                </p>

                            </div>
                        )}


                        {/* CASH ON DELIVERY INFORMATION */}
                        {paymentMethod === "cash" && (
                            <div className="payment-details">

                                <h3>Cash on Delivery</h3>

                                <p>
                                    You will pay when your building
                                    materials are delivered.
                                </p>

                                <p>
                                    Order Amount:{" "}
                                    <strong>
                                        {formatPrice(total)}
                                    </strong>
                                </p>

                                <p className="payment-notice">
                                    Please confirm the delivery location
                                    and payment arrangements with the
                                    company.
                                </p>

                            </div>
                        )}

                    </section>
                )}

            </div>
        </div>
    );
}