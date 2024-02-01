import React from 'react';

const AddToCartBtn = () => {
  return (
    <a
      className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
      href="#"
    >
      <img src="./assets/tag.svg" alt="" />
      <span>$100 | Add to Cart</span>
    </a>
  );
};

export default AddToCartBtn;
