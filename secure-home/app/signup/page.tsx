import React from 'react';
 
const SignUp: React.FC = () => {
  return (
<div className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
<div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center z-10">
<h2 className="text-2xl text-gray-800 mb-6">Sign Up</h2>
<div className="mb-4 relative text-left">
<input
            type="text"
            placeholder="Full name"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">👤</span>
</div>
<div className="mb-4 relative text-left">
<input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">📧</span>
</div>
<div className="mb-4 relative text-left">
<input
            type="password"
            placeholder="Password"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">🔒</span>
</div>
<div className="mb-4 relative text-left">
<input
            type="password"
            placeholder="Re-type password"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">🔑</span>
</div>
<button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-4">
          Sign Up
</button>
<div className="text-gray-600 mb-4">or</div>
<button className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center">
<span className="mr-2">🌐</span> Continue with Google
</button>
<p className="text-sm text-gray-600 mt-4">
          Already a member?{' '}
<a href="/login" className="text-blue-500 hover:underline">
            Login
</a>
</p>
</div>
<div className="absolute right-12 top-1/2 transform -translate-y-1/2">


</div>
</div>
  );
};
 
export default SignUp;