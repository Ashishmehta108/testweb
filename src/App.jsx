import { useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  ShoppingCart,
  Clock,
  Gift,
} from "lucide-react";

export default function RestaurantLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white ">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1708658223534-f4a3db0ec7ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-bold text-xl text-gray-800">Savoria</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container  mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1708658223534-f4a3db0ec7ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-bold text-xl text-gray-800">Savoria</span>
              </div>
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              <a
                href="#home"
                className="text-lg text-gray-800 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#menu"
                className="text-lg text-gray-800 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                Menu
              </a>
              <a
                href="#about"
                className="text-lg text-gray-800 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-lg text-gray-800 hover:text-orange-500 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors w-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="container  max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 lg:-translate-y-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Delicious Food
                <br />
                At Your Fingertips
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Discover amazing dishes from the comfort of your home. Order now
                and experience the best flavors in town.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center justify-center cursor-pointer">
                  Order now
                  <ChevronRight size={20} className="ml-2" />
                </button>
                <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                  View Menu
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Delicious Food"
                  className="rounded-2xl shadow-lg "
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-500 font-bold">4.9</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Customer Rating
                      </p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Easy Ordering */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Ordering</h3>
              <p className="text-gray-600">
                Just a few taps to place your order. Our app makes food ordering
                simple and fast.
              </p>
            </div>

            {/* Quick Delivery */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">
                Our delivery partners bring your food hot and fresh in record
                time.
              </p>
            </div>

            {/* Earn Rewards */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
              <p className="text-gray-600">
                Get points with every order and redeem them for discounts and
                free meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Popular Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our chef's special creations that customers love. From
              savory to sweet, we have something for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Specialty Burger",
                price: "₹129",
                category: "Main Course",
                image:
                  "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Fresh Salad Bowl",
                price: "₹99",
                category: "Starters",
                image:
                  "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },

              {
                name: "Artisan Pizza",
                price: "₹299",
                category: "Main Course",
                image:
                  "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-86 bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">
                      {item.price}
                    </span>
                    <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with our
              app and food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8">
            {[
              {
                name: "Sarah J.",
                quote:
                  "The app is so intuitive! I love how easy it is to order my favorite dishes and track my delivery in real-time.",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Michael T.",
                quote:
                  "The food always arrives hot and fresh. The rewards program is amazing - I've already earned two free meals!",
                image:
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Jessica K.",
                quote:
                  "Customer service is excellent. Had a small issue with my order and they resolved it immediately.",
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started Today
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-8">
            Download our app now and enjoy delicious meals delivered right to
            your doorstep. Use code <span className="font-bold">WELCOME10</span>{" "}
            for 10% off your first order.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-medium hover:bg-orange-50 cursor-pointer transition-colors">
              Get started
            </button>
            <button className="border border-white cursor-pointer text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions or feedback? We'd love to hear from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-orange-500 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-orange-500 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-600">hello@savoriaapp.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-orange-500 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Food Street, Cuisine City, FC 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-12 max-w-xl">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-200/50 text-white py-12">
        <div className="container sm:container lg:max-w-7xl max-w-md mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1708658223534-f4a3db0ec7ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-bold text-xl text-gray-800">Savoria</span>
              </div>
              <p className="text-gray-900 max-w-xs">
                Delivering delicious food and exceptional service to your
                doorstep since 2025.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Support</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-neutral-800 hover:text-neutral-500 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Savoria App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
