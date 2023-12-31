import React from "react";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout : React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;