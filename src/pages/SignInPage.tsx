import { useState } from 'react';
import { Mail, Lock, Heart, Eye, EyeOff } from 'lucide-react';

type Page = 'landing' | 'home' | 'about' | 'features' | 'pricing' | 'signin' | 'signup' | 'dashboard';

interface SignInPageProps {
  onNavigate: (page: Page) => void;
}

export default function SignInPage({ onNavigate }: SignInPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:flex flex-col justify-center">
          <div className="flex items-center space-x-2 mb-8">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
            <span className="text-4xl font-bold text-gradient">MOMIQ</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome Back!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Continue your maternal health journey with personalized care and expert support.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <span className="text-gray-700 dark:text-gray-300">
                Track your baby's development
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <span className="text-gray-700 dark:text-gray-300">Connect with healthcare experts</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <span className="text-gray-700 dark:text-gray-300">Access personalized insights</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 card-shadow">
          <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
            <span className="text-3xl font-bold text-gradient">MOMIQ</span>
          </div>

          <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Sign In</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:text-white transition-colors`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-12 pr-12 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 dark:bg-gray-700 dark:text-white transition-colors`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-rose-500 border-gray-300 rounded focus:ring-rose-500"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-rose-500 hover:text-rose-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold hover-lift"
            >
              Sign In
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-gray-700 dark:text-gray-300"
              >
                Google
              </button>
              <button
                type="button"
                className="py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-gray-700 dark:text-gray-300"
              >
                Facebook
              </button>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => onNavigate('signup')}
                className="text-rose-500 hover:text-rose-600 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
