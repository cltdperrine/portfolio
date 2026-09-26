import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="pt-24 min-h-screen bg-cream dark:bg-ink text-ink dark:text-cream transition-colors">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
