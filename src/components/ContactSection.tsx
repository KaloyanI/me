import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through the form or contact information below.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
        
          
          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="flex flex-row items-center justify-center gap-12">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@avekoko.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      info@avekoko.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+359888320606" className="text-muted-foreground hover:text-foreground transition-colors">
                      +359 888 32 06 06
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Burgas, Bulgaria
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="mb-4">
                I'm currently available for full-time remote work.
              </p>
              <div className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;