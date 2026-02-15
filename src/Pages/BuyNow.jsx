import React from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const BuyNow = () => {
  const { state } = useLocation();
  const { item } = state || {};
  const navigate = useNavigate();

  if (!item) {
    return <p className="text-center py-20">No product selected!</p>;
  }

  const handlePurchase = () => {
    Swal.fire({
      icon: "success",
      title: "Purchase Successful!",
      text: `You purchased ${item.name}`,
      confirmButtonColor: "#8D6E63",
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />

        <h2 className="text-3xl font-bold text-[#8D6E63]">{item.name}</h2>
        <p className="text-xl font-semibold text-gray-800 mt-2">
          Price: ${item.price}
        </p>

        <button
          onClick={handlePurchase}
          className="btn w-full mt-6 bg-[#8D6E63] hover:bg-[#6D4C41] text-white"
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default BuyNow;