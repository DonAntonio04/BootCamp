import Navigation from "./Navigation";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Mi Blog</h1>
        <Navigation />
      </header>
      <Breadcrumbs />
      <main>{children}</main>
      <footer>
        <small>&copy; 2025 Mi Blog</small>
      </footer>
    </>
  );
}