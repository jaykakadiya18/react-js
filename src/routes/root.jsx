import React from "react";
import Link from "@mui/material/Link";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Link href="/signin" variant="body2">
          Sign In
        </Link>

        <Link href="/signup" variant="body2">
          Sign Up
        </Link>

        <Link href="/Dashboard" variant="body2">
          Dashboard
        </Link>
      </div>
    </>
  );
}
