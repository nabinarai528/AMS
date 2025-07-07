const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-6 mt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-sm">
            This Attendance Management System helps schools and colleges track
            student presence efficiently with modern digital tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">Email: support@attendanceapp.com</p>
          <p className="text-sm">Phone: +977-9834525633</p>
          <p className="text-sm">Address: Itahari, Nepal</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-6 text-sm text-gray-300">
        © {new Date().getFullYear()} AttendanceApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

