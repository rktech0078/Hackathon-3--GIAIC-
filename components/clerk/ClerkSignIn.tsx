"use client";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

export default function ClerkButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Component is mounted on the client
    setIsMounted(true);
  }, []);

  return (
    <div className="dropdown dropdown-end">
      {isMounted && <UserButton />}
    </div>
  );
}
