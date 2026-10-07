import Navbar from "@/components/layout/navbar/Navbar"; // Adjust path to your Navbar
import Footer from "@/components/layout/Footer"; // Adjust path to your Footer

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="bg-white">{children}</div>
      <Footer />
    </div>
  );
}