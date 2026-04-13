import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Aloqa</h1>
        <p className="text-xl text-gray-600">
          Biz bilan bog'laning, sizning savollaringizga javob beramiz
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl mb-6">Aloqa ma'lumotlari</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Manzil</h3>
                  <p className="text-gray-600">
                    Paxtaobod tumani ko'ktonlik mfy,
                    <br />
                    Ko'ktonlik mfy
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Telefon</h3>
                  <p className="text-gray-600">
                    +998 95 057 10 17
                    <br />
                    +998 95 057 10 17
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <p className="text-gray-600">
                    ziyodulloerkinov906@gmail.com
                    <br />
                    ziyodulloerkinov906@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Ish vaqti</h3>
                  <p className="text-gray-600">
                    Dushanba - Shanba: 08:00 - 17:00
                    <br />
                    Yakshanba: Dam olish
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Management Contact */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
            <h2 className="text-2xl mb-4">Rahbariyat</h2>
            <div className="space-y-4">
              <div>
                <div className="text-blue-200 text-sm">Direktor</div>
                <div className="text-lg">Erkinov Ziyodullo Rahimovich</div>
                <div className="text-blue-200">+998 95 057 10 17</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm">
                  O'quv ishlari bo'yicha direktor o'rinbosari
                </div>
                <div className="text-lg">Karimova Dilnoza Akramovna</div>
                <div className="text-blue-200">+998 71 123 45 68</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm">
                  Tarbiya ishlari bo'yicha direktor o'rinbosari
                </div>
                <div className="text-lg">Sobirova Nigora Shavkatovna</div>
                <div className="text-blue-200">+998 71 123 45 69</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl mb-6">Bizga xabar yuboring</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Ism familiya
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ism familiyangizni kiriting"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Mavzu
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Xabar mavzusi"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  Xabar
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Xabaringizni yozing..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Xabar yuborish
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-12">
        <h2 className="text-3xl mb-6">Maktabni xaritada toping</h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5947624155344!2d69.2401!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQwLjAiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maktab manzili"
          />
        </div>
      </div>
    </div>
  );
}
