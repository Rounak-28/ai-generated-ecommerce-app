import React from "react";
import Link from "next/link";

const Navbar = () => {
return (
<nav className="bg-gray-800 text-white py-4 px-5 flex items-center justify-between">
<div className="flex items-center">
<Link href="/">
<div className="font-bold text-xl tracking-tight">App Name</div>
</Link>
<ul className="hidden md:flex items-center space-x-6">
<li>
<Link href="/products">
<div className="text-base font-medium tracking-wide hover:text-gray-500">
Products
</div>
</Link>
</li>
<li>
<Link href="/about">
<div className="text-base font-medium tracking-wide hover:text-gray-500">
About
</div>
</Link>
</li>
<li>
<Link href="/contact">
<div className="text-base font-medium tracking-wide hover:text-gray-500">
Contact
</div>
</Link>
</li>
</ul>
</div>
<div className="flex items-center">
<Link href="/cart">
<div className="text-base font-medium tracking-wide hover:text-gray-500">
<i className="fas fa-shopping-cart mr-1"></i>
Cart
</div>
</Link>
</div>
</nav>
);
};

export default Navbar;