import { Phone } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border bg-card/40 py-12 px-4 sm:px-6" role="contentinfo">
    <div className="container-narrow">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <h4 className="text-lg font-bold text-foreground mb-3">
            Fixur<span className="text-gradient">Device</span>
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bangalore's premium iPhone service center. Same-day repairs with genuine parts and warranty.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition-colors">Screen Replacement</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Battery Replacement</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Water Damage Repair</a></li>
            <li><a href="#services" className="hover:text-foreground transition-colors">Motherboard Repair</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Service Areas</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Indiranagar</li>
            <li>BTM Layout</li>
            <li>Whitefield</li>
            <li>Marathahalli</li>
            <li>Electronic City</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>123, 100 Feet Road, Indiranagar</p>
            <p>Bangalore - 560038</p>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </a>
            <p>support@fixurdevice.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} FixurDevice. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
