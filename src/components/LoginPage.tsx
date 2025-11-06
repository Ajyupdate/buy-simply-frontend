import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    console.log('Login submitted:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex">
    
      <div className="hidden lg:flex lg:w-1/2 bg-[#F8EAFF] flex-col p-8 lg:p-8">
        <div className="mb-12">
          <img src="/team-achieve.png" alt="Team Achieve" className="h-16 w-auto md:h-20" />
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center px-8">
          <div className="w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
              <img 
                src="/login-pic.png"
                alt="Login illustration"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-purple-900 mb-3">Team Achieve</h2>
              <h2 className="text-xl text-[#5E5E5E] font-bold">
                Your perfect solution for funding your desires
              </h2>
            </div>
          </div>
        </div>
      </div>

     
      <div className="w-full lg:w-1/2 bg-[#FCFCFC] flex flex-col">
       
        <div className="lg:hidden flex items-center justify-center  pt-12 px-8 ">
        <img src="/team-achieve.png" alt="Team Achieve" className="h-20 w-auto md:h-20 " />
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center px-8 pb-20 md:pb-8 lg:p-12 ">
          <div className="w-full max-w-xl  ">
            <div className="text-center mb:-8">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-3">
                Welcome Back
              </h2>
              <p className="text-gray-600 py-2">
                Enter your email address and password to access your account.
              </p>
            </div>

            <div className="space-y-6">
           
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition bg-white"
                />
              </div>

             
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative ">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-full px-4 flex items-center border border-gray-300 bg-gray-50 rounded-r-lg text-gray-500 hover:text-gray-700 transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>


          
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-purple-900 hover:text-purple-900 font-sm transition">
                  Forgot Password?
                </a>
              </div>

            
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-900 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Sign in
              </button>

            
              <p className="text-center text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-purple-900 hover:text-purple-900 font-semibold transition">
                  Sign up
                </a>
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;