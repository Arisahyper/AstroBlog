import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div class="flex justify-between">
        <div class="text-2xl font-bold">Header</div>
        <button></button>
      </div>
    </div>
  );
};

export default Header;
