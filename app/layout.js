import "./globals.css";

export function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "var(--color-neutral-200)",
      }}
      className="flex items-center justify-evenly gap-5 p-4 text-lg"
    >
      Global Navigation
      <div className="flex gap-5 justify-evenly">
        <a href="/">Home</a>
        <a href="/destinations">Destinations</a>
        <a href="/guides">Guides</a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-neutral-800)",
        color: "var(--color-primary-light)",
      }}
      className="flex items-center justify-evenly gap-5 p-4 text-2xl"
    >
      Global Footer
    </footer>
  );
}

// Root layout wraps everything
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavBar />
        <main className="min-h-dvh">{children}</main>{" "}
        {/* All pages render here */}
        <Footer />
      </body>
    </html>
  );
}
