"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

export default function SignInPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        credentials: "include", // Allows cookies to be sent and received
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log(response)
      if (!response.ok) {
        console.log(response)
        const errorData = await response.json();
        alert(errorData.msg || "Failed to sign in.");
        return;
      }

      // Parse the response
      const data = await response.json();
      console.log(data);

      // Save cookies if any are returned in the response
      if (data && data.token) {
        Cookies.set("token", data.token, { expires: 7 }); // Set cookie for 7 days
      }
      if (data && data.user){
        // save the user to a cookie 
        Cookies.set("userDisplayName", data.user.displayName, { expires: 7 });
      }
      router.push("/"); // Navigate to Home or another protected page
    } catch (error) {
      console.error("Sign in error:", error);
      alert("Error signing in. Check console.");
    }
  }

  return (
    <div style={{ maxWidth: "320px", margin: "100px auto" }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label>Username:</label> <br />
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div>
          <label>Password:</label> <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.5rem", cursor: "pointer" }}>
          Sign In
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Don&apos;t have an account?{" "}
        <Link href="/auth/sign-up" style={{ fontWeight: "bold" }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}
