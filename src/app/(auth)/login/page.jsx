"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Grid2X2, ArrowRight, Eye, EyeOff, Mail, Lock, Sparkles, AlertCircle } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaCloudflare } from "react-icons/fa6"; // Added Cloudflare icon
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [generalError, setGeneralError] = useState(""); // For network/server errors

  // High-end architectural surface finishes
  const textures = [
    {
      name: "Polished Onyx",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      color: "#e5e5e5"
    },
    {
      name: "Architectural Concrete",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
      color: "#a3a3a3"
    },
    {
      name: "Nordic Slate",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
      color: "#404040"
    }
  ];

  const [activeTexture, setActiveTexture] = useState(textures[0]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: "onChange", // Instantly clears errors when typing
    defaultValues: {
      email: "",
      password: "",
      remember: false, // Default state for the remember me checkbox
    }
  });

  const handleLogInFunc = async (data) => {
    setGeneralError(""); // Clear previous errors
    const { email, password, remember } = data; // Extract 'remember' from form data

    try {
      // Pass rememberMe directly to Better Auth
      const { data: res, error } = await authClient.signIn.email({
        email: email,
        password: password,
        rememberMe: remember, 
      });

      // Handle Authentication Errors
      if (error) {
        const errMsg = error.message?.toLowerCase() || "";
        
        // Catch invalid credentials
        if (errMsg.includes("invalid") || errMsg.includes("wrong") || errMsg.includes("credential")) {
          setError("email", { type: "server", message: "Invalid email or password." });
          setError("password", { type: "server", message: "Invalid email or password." });
        } else if (errMsg.includes("not found") || errMsg.includes("no user")) {
          setError("email", { type: "server", message: "Account not found. Please create an account." });
        } else {
          // Catch-all for other auth errors
          setGeneralError(error.message || "Login failed. Please try again.");
        }
        return;
      }

      // Success: Redirect user to the homepage or dashboard
      if (res) {
        router.push("/");
      }

    } catch (err) {
      // Fallback for network failures or unexpected crashes
      setGeneralError("A network error occurred. Please check your connection.");
    }
  };
  
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  }

  // New Cloudflare Sign In Handler
  const handleCloudflareSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "cloudflare",
    });
  }

  return (
    <div className="min-h-screen flex w-full font-sans bg-white text-black overflow-hidden">
      {/* Left Section - The Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        {/* Mobile Logo */}
        <Link href="/" className="absolute top-8 left-8 lg:hidden flex items-center gap-3 text-black">
          <Grid2X2 size={24} strokeWidth={1.5} />
          <span className="text-sm font-bold tracking-[0.2em] uppercase">Vibecoder</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-black uppercase tracking-[0.1em] mb-2">Welcome Back</h1>
            <p className="text-neutral-500 text-sm">Enter your portal to access your showroom profile.</p>
          </div>

          {/* Social Auth Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button 
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center py-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all group"
            >
              <FaGoogle size={18} className="group-hover:scale-110 transition-transform" />
            </button>
            <button 
              type="button"
              onClick={handleGithubSignIn}
              className="flex items-center justify-center py-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all group"
            >
              <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
            </button>
            <button 
              type="button"
              onClick={handleCloudflareSignIn}
              className="flex items-center justify-center py-3 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all group"
            >
              <FaCloudflare size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="w-full border-t border-neutral-200"></div>
            <span className="absolute bg-white px-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
              Or continue with email
            </span>
          </div>

          {/* General Server Error Display */}
          {generalError && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs flex items-center gap-2 border border-red-100">
              <AlertCircle size={14} />
              {generalError}
            </div>
          )}

          {/* The Form */}
          <form className="space-y-5" onSubmit={handleSubmit(handleLogInFunc)} noValidate>
            
            {/* Email Input */}
            <div>
              <div className="relative border-b-2 border-neutral-200 focus-within:border-black transition-colors group">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 flex items-center gap-2 mb-1">
                  <Mail size={12} /> Email Address
                </label>
                <input
                  type="email"
                  disabled={isSubmitting}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address"
                    }
                  })}
                  className="w-full bg-transparent outline-none py-2 text-sm placeholder:text-neutral-300 disabled:opacity-50"
                  placeholder="hello@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative border-b-2 border-neutral-200 focus-within:border-black transition-colors group">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 flex items-center gap-2 mb-1">
                  <Lock size={12} /> Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    disabled={isSubmitting}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long"
                      }
                    })}
                    className="w-full bg-transparent outline-none py-2 text-sm placeholder:text-neutral-300 disabled:opacity-50"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-2 text-neutral-400 hover:text-black transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  disabled={isSubmitting}
                  {...register("remember")}
                  className="w-4 h-4 shrink-0 rounded-none border-neutral-300 text-black focus:ring-black accent-black disabled:opacity-50 cursor-pointer"
                />
                <span className="text-neutral-500 font-medium cursor-pointer">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="font-bold text-black uppercase tracking-wider hover:underline underline-offset-4"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white p-4 flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors group mt-2 disabled:bg-neutral-400 disabled:cursor-not-allowed"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                {isSubmitting ? "Authenticating..." : "Log In"}
              </span>
              {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />}
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-8 text-center">
            <p className="text-xs text-neutral-500 uppercase tracking-widest">
              New to Vibecoder?{" "}
              <Link
                href="/signup"
                className="text-black font-bold hover:text-neutral-500 transition-colors ml-2"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Interactive Texture & Surface Showcase */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-neutral-100 flex-col justify-between p-16">
        <div
          className="absolute inset-0 opacity-90 transition-all duration-700 ease-in-out scale-105"
          style={{
            backgroundImage: `url(${activeTexture.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />

        {/* Top Branding */}
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 border border-neutral-200 shadow-sm">
            <Sparkles size={14} className="text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-800">
              Interactive Surface Preview
            </span>
          </div>

          <Link href="/" className="flex items-center gap-3 text-black group">
            <div className="flex flex-col text-right justify-center border-r border-black/20 pr-3">
              <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none">
                Vibecoder
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 mt-1">
                Ceramics
              </span>
            </div>
            <div className="group-hover:-rotate-90 transition-transform duration-700">
              <Grid2X2 size={32} strokeWidth={1.5} />
            </div>
          </Link>
        </div>

        {/* Bottom Interactive Switcher */}
        <div className="relative z-10 bg-white/90 backdrop-blur-xl p-8 border border-neutral-200 shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Select Showroom Finish: <span className="text-black">{activeTexture.name}</span>
          </p>
          <div className="flex items-center gap-4">
            {textures.map((tex) => (
              <button
                key={tex.name}
                type="button"
                onClick={() => setActiveTexture(tex)}
                className={`flex items-center gap-2 px-4 py-2 text-xs uppercase font-semibold tracking-wider transition-all border ${
                  activeTexture.name === tex.name
                    ? "bg-black text-white border-black scale-105 shadow-md"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-neutral-400"
                  style={{ backgroundColor: tex.color }}
                />
                {tex.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}