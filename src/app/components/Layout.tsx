import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Direktor", href: "/director" },
    { name: "O'qituvchilar", href: "/teachers" },
    { name: "Maktab haqida", href: "/about" },
    { name: "Yutuqlar", href: "/achievements" },
    { name: "Kutubxona", href: "/library" },
    { name: "Bitiruvchilar", href: "/graduates" },
    { name: "Blog", href: "/blog" },
    { name: "Galereya", href: "/gallery" },
    { name: "Aloqa", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white py-3 px-4 text-center">
        <h1 className="text-lg md:text-xl">
          69-IDUM maktabi rasmiy web sayti
        </h1>
      </div>

      {/* Navigation */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-gray-900 dark:text-white">69-IDUM</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Bilim maskani</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle and Mobile menu button */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t">
            <nav className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8" />
                <div className="font-bold text-lg">69-IDUM maktab</div>
              </div>
              <p className="text-gray-300 text-sm">
                Bilim, tarbiya va sport sohasida yuqori natijalarga erishish
                uchun ishlaymiz.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Tezkor havolalar</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/about" className="hover:text-white">
                    Maktab haqida
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" className="hover:text-white">
                    O'qituvchilar
                  </Link>
                </li>
                <li>
                  <Link to="/achievements" className="hover:text-white">
                    Yutuqlar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Aloqa</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Tel: +998 95 057 10 17</li>
                <li>Email: ziyodulloerkinov906</li>
                <li>Andijon viloyati, Paxtaobod tumani</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              © 2026 69-Idum maktabi. Barcha huquqlar
              himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}