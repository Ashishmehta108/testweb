// import { useState, useEffect } from "react";
// import { useAuth } from "./auth.context";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { supabase } from "./auth";

// const schema = z.object({
//   email: z.string().email({ message: "Please enter a valid email" }),
//   password: z.string().min(8, "Password must be at least 8 characters"),
// });

// export default function Login() {
//   const user = useAuth();
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     console.log("Login Data:", data);
//     const { error } = await supabase.auth.signInWithPassword({
//       email: data.email,
//       password: data.password,
//     });

//     if (error) {
//       console.error("Login error:", error.message);
//     } else {
//       console.log("Successfully logged in");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         redirectTo: window.location.origin,
//       },
//     });
//     if (error) {
//       console.error("Google sign-in error:", error.message);
//     }
//   };

//   useEffect(() => {
//     const checkSession = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();

//       if (session) {
//         console.log("User session found:", session);
//         // Optionally redirect or store session
//       }
//     };

//     checkSession();
//   }, []);

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-orange-100 via-white to-orange-200">
//       <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0" />
//       <div className="relative z-10 w-full max-w-md bg-white/90 shadow-xl rounded-3xl px-8 py-10 space-y-6">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-orange-600 mb-2">Sign In</h2>
//           <p className="text-sm text-gray-600">
//             Welcome back! Log in to continue.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           <div>
//             <label
//               htmlFor="email"
//               className="text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               {...register("email")}
//               placeholder="you@example.com"
//               className={`mt-1 w-full px-4 py-3 rounded-xl border ${
//                 errors.email ? "border-red-400" : "border-gray-300"
//               } shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
//             />
//             {errors.email && (
//               <p className="text-xs text-red-500 mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 {...register("password")}
//                 placeholder="••••••••"
//                 className={`mt-1 w-full px-4 py-3 pr-12 rounded-xl border ${
//                   errors.password ? "border-red-400" : "border-gray-300"
//                 } shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-[1.1rem] text-sm text-orange-500 hover:underline focus:outline-none"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-xs text-red-500 mt-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-full font-semibold text-lg shadow-lg transform transition-all hover:scale-[1.02] active:scale-95"
//           >
//             Log In
//           </button>
//         </form>

//         <div className="flex justify-center items-center space-x-2">
//           <button
//             onClick={handleGoogleLogin}
//             className="flex items-center space-x-2 border-2 border-orange-500 rounded-full px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors"
//           >
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
//               className="w-6 h-6"
//               alt="Google"
//             />
//             <span className="font-medium text-orange-500">
//               Sign in with Google
//             </span>
//           </button>
//         </div>

//         <div className="text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <a href="#" className="text-orange-500 font-medium hover:underline">
//             Create one
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
