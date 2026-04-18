import { useState } from 'react';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[var(--python-color)] opacity-10 rounded-full blur-[120px] -top-20 -left-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute w-[400px] h-[400px] bg-[var(--css-color)] opacity-10 rounded-full blur-[100px] top-1/2 -right-20 animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute w-[350px] h-[350px] bg-[var(--sql-color)] opacity-10 rounded-full blur-[90px] -bottom-20 left-1/3 animate-pulse" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="mb-8 text-center">
          <h1 className="mb-3 opacity-0 animate-[fadeSlideDown_0.6s_ease-out_0.1s_forwards]">
            EduVerse
          </h1>
          <p className="text-muted-foreground opacity-0 animate-[fadeSlideDown_0.6s_ease-out_0.2s_forwards]">
            Your gateway to knowledge
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm shadow-2xl opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.3s_forwards]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 text-foreground">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-[var(--python-color)] focus:outline-none focus:ring-2 focus:ring-[var(--python-color)] focus:ring-opacity-20 transition-all duration-200"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-foreground">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-input-background rounded-lg border border-border focus:border-[var(--css-color)] focus:outline-none focus:ring-2 focus:ring-[var(--css-color)] focus:ring-opacity-20 transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[var(--python-color)] to-[var(--css-color)] text-white rounded-lg hover:shadow-lg hover:shadow-[var(--python-color)]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Demo credentials: any username & password
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
