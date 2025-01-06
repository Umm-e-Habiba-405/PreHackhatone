
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Header from "../Components/Header";

// const Cart = () => {
//   // Example Cart Items
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "Gucci Duffle Bag", price: 650, quantity: 1, image: "/Frame 609.png" },
//     { id: 2, name: "AK-900 Wired Keyboard", price: 550, quantity: 2, image: "/ak-900-01-500x500 1.png" },
//     { id: 3, name: "GP11 Shooter USB Gamepad", price: 550, quantity: 2, image: "/Frame 608.png" },
//     { id: 4, name: "HAVIT HV-G92 Gamepad", price: 550, quantity: 2, image: "/Frame 611.png" },
//   ]);

//   const shippingCost = 50;

//   // Update Quantity
//   const updateQuantity = (id: number, newQuantity: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
//       )
//     );
//   };

//   // Remove Product
//   const removeProduct = (id: number) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   // Calculate Subtotal
//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   // Total Cost
//   const totalCost = calculateSubtotal() + shippingCost;

//   // Checkout Handler
//   const handleCheckout = () => {
//     alert("Proceeding to checkout...");
//   };

//   return (
//     <div>
//       <Header/>
//     <div className="p-8">
//       <h1 className="text-[36px] text-center font-bold mb-6">Your Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <div className=" lg:grid-cols-4 gap-8">
//           {/* Cart Items */}
//           <div className="">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border p-4 mb-4 rounded-md w-[1170px] ml-40"
//               >
//                 <div className="flex items-center">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={100}
//                     height={100}
//                     className="mr-4"
//                   />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-red-600">${item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="bg-gray-300 px-3 py-1 rounded-md"
//                   >
//                     -
//                   </button>
//                   <span className="mx-4">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="bg-gray-300 px-3 py-1 rounded-md"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeProduct(item.id)}
//                     className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Summary Section */}
//           <div className="border p-4 rounded-md w-[450px] ml-[880px] h-[324px] mt-10">
//             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>${calculateSubtotal().toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Shipping</span>
//               <span>${shippingCost.toFixed(2)}</span>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between text-lg font-bold">
//               <span>Total</span>
//               <span>${totalCost.toFixed(2)}</span>
//             </div>
//             <button
//               onClick={handleCheckout}
//               className="bg-green-600 text-white w-full py-3 rounded-md mt-6"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Cart;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../Components/Header";

const Cart = () => {
  // Example Cart Items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gucci Duffle Bag", price: 650, quantity: 1, image: "/Frame 609.png" },
    { id: 2, name: "AK-900 Wired Keyboard", price: 550, quantity: 2, image: "/ak-900-01-500x500 1.png" },
    { id: 3, name: "GP11 Shooter USB Gamepad", price: 550, quantity: 2, image: "/Frame 608.png" },
    { id: 4, name: "HAVIT HV-G92 Gamepad", price: 550, quantity: 2, image: "/Frame 611.png" },
  ]);

  const shippingCost = 50;

  // Update Quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  // Remove Product
  const removeProduct = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate Subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Total Cost
  const totalCost = calculateSubtotal() + shippingCost;

  // Checkout Handler
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-[36px] text-center font-bold mb-6">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Cart Items */}
            <div className="col-span-1 lg:col-span-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-4 mb-4 rounded-md w-full"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-red-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-300 px-3 py-1 rounded-md"
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-300 px-3 py-1 rounded-md"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeProduct(item.id)}
                      className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="col-span-1 lg:col-span-1 border p-4 rounded-md w-full h-[324px] mt-10">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white w-full py-3 rounded-md mt-6"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;



