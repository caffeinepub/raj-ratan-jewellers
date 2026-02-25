import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917717770674?text=Hi%2C%20I%27m%20interested%20in%20your%20jewellery%20collection"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-luxury-lg hover:scale-110 transition-transform duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="h-7 w-7" />
    </a>
  );
}
