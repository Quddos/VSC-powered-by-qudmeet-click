import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo bg.png"
              alt="Varsity Scholars Consult"
              width={100}
              height={100}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="text-sm text-gray-300 text-center md:text-left">
              Empowering students to achieve their academic dreams through expert guidance and support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/student/apply" className="hover:text-blue-400 transition-colors">Apply Now</Link></li>
              <li><Link href="/admin-auth" className="hover:text-blue-400 transition-colors">Admin Portal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: varsityscholarsconsult@gmail.com</li>
              <li>Phone: +256757992736</li>
              <li>Alternative: +79995140053</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Varsity Scholars Consult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
