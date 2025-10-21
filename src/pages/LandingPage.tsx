import { Heart, ArrowRight, Sparkles, Baby, Shield, Activity } from 'lucide-react';

type Page = 'landing' | 'home' | 'about' | 'features' | 'pricing' | 'signin' | 'signup' | 'dashboard';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32">
          <Baby className="w-full h-full text-rose-300" />
        </div>
        <div className="absolute bottom-20 right-20 w-40 h-40">
          <Heart className="w-full h-full text-pink-300 fill-pink-300" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24">
          <Activity className="w-full h-full text-rose-200" />
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmIzYzYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTEwIDIwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0xMCAyMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <Heart className="w-24 h-24 text-rose-500 fill-rose-500 relative z-10" />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">MOMIQ</span>
            </h1>

            <div className="flex items-center justify-center space-x-2 mb-8">
              <Sparkles className="w-5 h-5 text-rose-500" />
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                Your Smart Maternal Companion
              </p>
              <Sparkles className="w-5 h-5 text-rose-500" />
            </div>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Empowering mothers with intelligent monitoring, personalized care, and expert support throughout their beautiful journey.
            </p>

            <div className="flex items-center justify-center space-x-6 mb-12 text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-rose-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-rose-500" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Baby className="w-5 h-5 text-rose-500" />
                <span>Expert Care</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Get Started Today
              </h2>

              <div className="space-y-4">
                <button
                  onClick={() => onNavigate('signup')}
                  className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 group"
                >
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('signin')}
                  className="w-full py-4 bg-white border-2 border-rose-300 text-gray-700 rounded-xl hover:bg-rose-50 hover:border-rose-400 transition-all duration-300 font-semibold text-lg"
                >
                  Sign In
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('home')}
                  className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium"
                >
                  Continue as Guest
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-6">
                Join 50,000+ mothers on their journey to healthier outcomes
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Track Development</h3>
              <p className="text-sm text-gray-600">Monitor baby growth with precision tracking</p>
            </div>

            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Health Insights</h3>
              <p className="text-sm text-gray-600">Real-time vital signs and wellness metrics</p>
            </div>

            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">24/7 access to healthcare professionals</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
