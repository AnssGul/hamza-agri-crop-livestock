import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      details: "+92 309 5435417",
      link: "tel:+923095435417"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: "nissowana60@gmail.com",
      link: "mailto:nissowana60@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: "Chak 3/1r Haroonabad, Punjab, Pakistan",
      link: "https://maps.app.goo.gl/ZpoEhXHptWRfZxcv6"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 font-serif mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-700">
            Interested in our livestock or agricultural services? Get in touch with us today!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full text-green-700 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-green-800 mb-1">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-slate-600 hover:text-green-700 transition-colors"
                      target={info.title === "Location" ? "_blank" : undefined}
                      rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-slate-600">Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200 focus:border-green-500 outline-none transition ${errors.name ? 'border-red-500' : 'border-slate-300'
                        }`}
                      disabled={formStatus === 'submitting'}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200 focus:border-green-500 outline-none transition ${errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                      disabled={formStatus === 'submitting'}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500 outline-none transition"
                      disabled={formStatus === 'submitting'}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500 outline-none transition"
                      disabled={formStatus === 'submitting'}
                    >
                      <option value="">Select a subject</option>
                      <option value="Livestock Inquiry">Livestock Inquiry</option>
                      <option value="Crop & Seed Inquiry">Crop & Seed Inquiry</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring focus:ring-green-200 focus:border-green-500 outline-none transition ${errors.message ? 'border-red-500' : 'border-slate-300'
                      }`}
                    disabled={formStatus === 'submitting'}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className={`flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-700 text-white font-semibold rounded-md transition-colors ${formStatus === 'submitting'
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-green-800'
                    }`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};