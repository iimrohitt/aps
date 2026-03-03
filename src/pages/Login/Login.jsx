import { useNavigate } from "react-router-dom";
import { Check, Star } from "lucide-react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex items-center justify-center">

            {/* FULL SCREEN BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/login-bg.webp')" }}
            />

            {/* Optional subtle overlay for readability */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-all duration-300" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between px-8 py-16">

                {/* LEFT TEXT SECTION */}
                <div className="text-white max-w-md mb-12 lg:mb-0">

                    <div className="absolute top-2 -left-12 flex items-center gap-2 mb-10">
                        <div className="w-5 h-5 flex justify-center items-center  rounded-full bg-[#0CC8A8]" >
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-xl font-semibold pb-[5px]">aps</span>
                    </div>

                    <h1 className="text-4xl font-medium leading-tight mb-6">
                        Expert level Cybersecurity in
                        <span className="text-[#0CC8A8]"> hours</span> not weeks.
                    </h1>

                    <div className="space-y-4 text-sm text-gray-200">
                        <h4 className="font-medium">What's included</h4>

                        <div className="flex items-start max-w-[95%] gap-2">
                            <Check className="w-3 h-3 text-[#0CC8A8] mt-1 " />
                            <p>
                                Effortlessly spider and map targets to uncover hidden security flaws
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#0CC8A8] mt-1" />
                            <p>
                                Deliver high-quality, validated findings in hours, not weeks.
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-[#0CC8A8] mt-1" />
                            <p>
                                Generate professional, enterprise-grade security reports automatically.
                            </p>
                        </div>

                    </div>
                    <div className="mt-24 text-sm text-gray-300">

                        <div className="flex items-center gap-1 mb-1">
                            <Star className="w-3 h-3 text-[#0CC8A8] fill-[#0CC8A8]" />
                            <span className="text-[12px]">Trustpilot</span>
                        </div>

                        <div className="flex gap-2 mt-3">
                            <span className="text-white font-semibold">
                                Rated 4.5/5.0
                            </span>
                            <span className="text-gray-400 text-[10px] inline-block ">
                                (100k+ reviews)
                            </span>
                        </div>

                    </div>

                </div>

                {/* FORM CARD */}
                <div className="w-full max-w-md">

                    <div className="backdrop-blur-xl
                          bg-white/90 dark:bg-[#1A1A1A]/90
                          border border-white/20 dark:border-gray-700
                          rounded-2xl p-10 shadow-2xl
                          transition-all duration-300">

                        <h2 className="text-2xl font-semibold text-center mb-2
                           text-black dark:text-white">
                            Sign up
                        </h2>

                        <p className="text-sm text-center mb-6
                          text-gray-600 dark:text-gray-400">
                            Already have an account? {" "}
                            <span className="text-[#0CC8A8] underline cursor-pointer">
                                Log in
                            </span>
                        </p>

                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                navigate("/dashboard");
                            }}
                        >

                            <input
                                type="text"
                                placeholder="First name*"
                                className="w-full px-4 py-3 rounded-lg
                           border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-[#111111]
                           text-black dark:text-white
                           focus:ring-2 focus:ring-[#0CC8A8]
                           outline-none transition"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Last name*"
                                className="w-full px-4 py-3 rounded-lg
                           border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-[#111111]
                           text-black dark:text-white
                           focus:ring-2 focus:ring-[#0CC8A8]
                           outline-none transition"
                            />

                            <input
                                type="email"
                                placeholder="Email address*"
                                className="w-full px-4 py-3 rounded-lg
                           border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-[#111111]
                           text-black dark:text-white
                           focus:ring-2 focus:ring-[#0CC8A8]
                           outline-none transition"
                                required
                            />

                            <input
                                type="password"
                                placeholder="Password (8+ characters)*"
                                className="w-full px-4 py-3 rounded-lg
                           border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-[#111111]
                           text-black dark:text-white
                           focus:ring-2 focus:ring-[#0CC8A8]
                           outline-none transition"
                                required
                            />

                            <label className="flex items-start gap-1 text-sm 
                   text-gray-600 dark:text-gray-400 leading-relaxed cursor-pointer">

                                <input
                                    type="checkbox"
                                    className="mt-[5px] accent-[#0CC8A8]"
                                    required
                                />

                                <span>
                                    I agree to Aps's{" "}
                                    <span className="text-[#0CC8A8] underline hover:opacity-80 transition cursor-pointer">
                                        Terms & Conditions
                                    </span>
                                    {" "}and acknowledge the{" "}
                                    <span className="text-[#0CC8A8] underline hover:opacity-80 transition cursor-pointer">
                                        Privacy Policy
                                    </span>.
                                </span>

                            </label>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-full
             bg-[#0CC8A8] text-white font-medium
             hover:opacity-90 transition"
                            >
                                Create account
                            </button>
                            {/* Social Buttons */}
                            <div className="flex gap-3 mt-4">

                                {/* Apple */}
                                <button className="flex-1 py-2 rounded-full bg-black text-white 
                     flex items-center justify-center hover:opacity-90 transition">
                                    <FaApple size={18} />
                                </button>

                                {/* Google */}
                                <button className="flex-1 py-2 rounded-full bg-white border border-gray-300
                     flex items-center justify-center hover:opacity-90 transition">
                                    <FaGoogle size={18} className="text-red-500" />
                                </button>

                                {/* Meta */}
                                <button className="flex-1 py-2 rounded-full bg-blue-600 text-white
                     flex items-center justify-center hover:opacity-90 transition">
                                    <SiMeta size={18} />
                                </button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;