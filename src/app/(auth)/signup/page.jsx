"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Grid2X2, ArrowRight, Eye, EyeOff, User, Mail, Lock, AlertCircle } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaCloudflare } from "react-icons/fa6"; // Added Cloudflare icon
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [generalError, setGeneralError] = useState(""); // For network/server errors

  const BACKGROUND_IMAGE =
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop";

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting } 
  } = useForm({
    mode: "onChange", // Instantly clears errors when typing/checking
    defaultValues: {
      username: "",
      email: "",
      password: "",
      terms: false, // Explicitly defines this as a boolean for the checkbox
    }
  });

  const handleSignUpFunc = async (data) => {
    setGeneralError(""); // Clear previous errors
    const { email, username, password } = data;

    try {
      const { data: res, error } = await authClient.signUp.email({
        name: username,
        email: email,
        password: password,
        callbackURL: "/",
      });

      // Handle Authentication Errors
      if (error) {
        const errMsg = error.message?.toLowerCase() || "";
        
        // Check if the error indicates the user already exists
        if (errMsg.includes("exist") || errMsg.includes("already") || error.status === 409) {
          setError("email", { 
            type: "server", 
            message: "This email is already registered. Please log in." 
          });
        } else {
          // Catch-all for other auth errors
          setGeneralError(error.message || "Sign up failed. Please try again.");
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

  // Social Sign In Handlers
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

  const handleCloudflareSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "cloudflare",
    });
  }

  return (
    <div className="min-h-screen flex w-full font-sans bg-white text-black overflow-hidden">
      {/* Left Section - The Visual Identity */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-neutral-950">
        <div
          className="absolute inset-0 opacity-60 scale-105 animate-[spin_120s_linear_infinite_reverse] origin-center"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        {/* Brand Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-16">
          <Link href="/" className="flex items-center gap-3 text-white w-fit group">
            <div className="group-hover:rotate-90 transition-transform duration-700">
              <Grid2X2 size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center border-l border-white/30 pl-3">
              <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none">
                Vibecoder
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 mt-1">
                Ceramics
              </span>
            </div>
          </Link>

          <div>
            <h2 className="text-4xl font-serif text-white mb-4 leading-tight">
              Crafting surfaces that <br /> define generations.
            </h2>
            <p className="text-neutral-400 text-sm tracking-wide max-w-md">
              Join our community of architects, designers, and visionaries. Gain exclusive access to
              3D room visualizers, trade pricing, and our 2026 Lookbook.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - The Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        {/* Mobile Logo */}
        <Link href="/" className="absolute top-8 left-8 lg:hidden flex items-center gap-3 text-black">
          <Grid2X2 size={24} strokeWidth={1.5} />
          <span className="text-sm font-bold tracking-[0.2em] uppercase">Vibecoder</span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-3xl font-black uppercase tracking-[0.1em] mb-2">Create Account</h1>
            <p className="text-neutral-500 text-sm">Design starts here. Set up your profile.</p>
          </div>

          {/* Social Auth Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
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

          <div className="relative flex items-center justify-center mb-8">
            <div className="w-full border-t border-neutral-200"></div>
            <span className="absolute bg-white px-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
              Or register with email
            </span>
          </div>

          {/* General Server Error Display */}
          {generalError && (
            <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs flex items-center gap-2 border border-red-100">
              <AlertCircle size={14} />
              {generalError}
            </div>
          )}

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit(handleSignUpFunc)} noValidate>
            
            {/* Username Input */}
            <div>
              <div className="relative border-b-2 border-neutral-200 focus-within:border-black transition-colors group">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-500 flex items-center gap-2 mb-1">
                  <User size={12} /> Username
                </label>
                <input
                  type="text"
                  disabled={isSubmitting}
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters"
                    }
                  })}
                  className="w-full bg-transparent outline-none py-2 text-sm placeholder:text-neutral-300 disabled:opacity-50"
                  placeholder="architect_01"
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
              )}
            </div>

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
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
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
                      },
                      maxLength: {
                        value: 14,
                        message: "Password cannot exceed 14 characters"
                      },
                      validate: {
                        hasUpper: (val) =>
                          /[A-Z]/.test(val) || "Password must include at least one capital letter",
                        hasNumber: (val) =>
                          /\d/.test(val) || "Password must include at least one number"
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

            {/* Terms */}
            <div>
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  disabled={isSubmitting}
                  {...register("terms", {
                    validate: (value) => value === true || "You must accept the terms and conditions to proceed"
                  })}
                  className="mt-1 w-4 h-4 shrink-0 rounded-none border-neutral-300 text-black focus:ring-black accent-black disabled:opacity-50 cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-neutral-500 leading-relaxed cursor-pointer">
                  I agree to Vibecoder Ceramics' {" "}
                  <Link
                    href="/terms-of-service"
                    className="text-black underline underline-offset-2 hover:text-neutral-500 transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-black underline underline-offset-2 hover:text-neutral-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white p-4 flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors group mt-4 disabled:bg-neutral-400 disabled:cursor-not-allowed"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                {isSubmitting ? "Processing..." : "Join Now"}
              </span>
              {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-12 text-center">
            <p className="text-xs text-neutral-500 uppercase tracking-widest">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-black font-bold hover:text-neutral-500 transition-colors ml-2"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}