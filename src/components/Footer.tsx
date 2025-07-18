const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-4">
              Translational Futures Foundation
            </h3>
            <p className="opacity-80 leading-relaxed">
              Advancing trauma recovery through innovative neuroscience research and compassionate care.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#mission" className="hover:opacity-100 transition-opacity">Our Mission</a></li>
              <li><a href="#programs" className="hover:opacity-100 transition-opacity">Programs</a></li>
              <li><a href="#team" className="hover:opacity-100 transition-opacity">Team</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Research Publications</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Treatment Guidelines</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Support Resources</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="opacity-60">
            © 2024 Translational Futures Foundation. All rights reserved. 
            <span className="mx-2">|</span>
            A 501(c)(3) nonprofit organization dedicated to advancing trauma recovery.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;