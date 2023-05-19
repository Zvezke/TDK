"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Link
      onClick={() => setMenuOpen(false)}
      className="max-lg:mr-auto"
      href="/"
    >
      <Image src="/images/church.svg" alt="Logo" width={40} height={40} />
    </Link>
  );
};

export default Logo;
