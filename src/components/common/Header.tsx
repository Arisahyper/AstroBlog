import React, { useState } from "react";
import HamburgerButton from "../icons/HamburgerButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div class="flex justify-between ">
        <div class="text-2xl font-bold">Header</div>
        <a href="/">Works</a>
        <a href="/">Posts</a>
        <button>
          <HamburgerButton />
        </button>
      </div>
    </div>
  );
};

export default Header;
