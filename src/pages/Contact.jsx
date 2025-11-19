import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { MapPin, Phone, Mail, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SEO, { BreadcrumbSchema } from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'العنوان',
      content: 'Republic of Chad, City of N\'djamena Rue de 40, BP: 7514',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      content: '+235-61745555 / +235-22533242',
      link: 'tel:+23561745555',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      content: 'info@globizsupplies.com',
      link: 'mailto:info@globizsupplies.com',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'التجارة والاستيراد والتصدير',
    'النقل واللوجستيات',
    'إدارة المرافق والصيانة',
    'البناء والتجديد',
    'تأجير السيارات',
    'تأجير المعدات الثقيلة',
    'العقارات وإدارة الممتلكات',
    'الموارد البشرية',
    'أخرى'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.ContactForm.create(formData);
      setIsSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service_interest: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ أثناء الإرسال. الرجاء المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO
        title="اتصل بنا - تواصل عبر الواتساب | Global Business & Suppliers Chad"
        description="تواصل مع Global Business & Suppliers في نجامينا، تشاد. هاتف: +235-61745555. بريد: info@globizsupplies.com. نقدم استشارات مجانية ودعم على مدار الساعة."
        keywords="اتصل بنا تشاد, تواصل واتساب, Global Business Suppliers contact, N'djamena trading company, Chad business inquiry"
        url="https://globizsupplies.com/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' },
          { name: 'اتصل بنا', url: 'https://globizsupplies.com/contact' }
        ]}
      />
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26522] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#F26522]/20 backdrop-blur-sm rounded-full border border-[#F26522]/30">
            <span className="text-[#F26522] font-semibold">تواصل معنا</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">نحن هنا لمساعدتك</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            تواصل معنا اليوم ودعنا نناقش كيف يمكننا خدمتك
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1A3B6C] mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 hover:text-[#F26522] transition-colors text-sm leading-relaxed"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-700 text-sm leading-relaxed">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-4">
              تواصل عبر الواتساب
            </h2>
            <p className="text-xl text-gray-600">
              املأ النموذج وسنتواصل معك عبر الواتساب فوراً
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1A3B6C] mb-4">
                تم إرسال طلبك بنجاح!
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                شكراً لتواصلك معنا. سنتواصل معك عبر الواتساب في أقرب وقت ممكن.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="btn-primary px-8 py-4 rounded-full text-white font-bold text-lg"
              >
                إرسال رسالة أخرى
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1A3B6C]">
                      الاسم الكامل <span className="text-[#F26522]">*</span>
                    </label>
                    <Input
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                      className="h-12 text-lg border-2 border-gray-200 focus:border-[#F26522] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1A3B6C]">
                      البريد الإلكتروني <span className="text-[#F26522]">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      className="h-12 text-lg border-2 border-gray-200 focus:border-[#F26522] rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1A3B6C]">
                      رقم الهاتف <span className="text-[#F26522]">*</span>
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+235-XXXXXXXXX"
                      required
                      className="h-12 text-lg border-2 border-gray-200 focus:border-[#F26522] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1A3B6C]">
                      الخدمة المهتم بها
                    </label>
                    <Select
                      value={formData.service_interest}
                      onValueChange={(value) => setFormData({...formData, service_interest: value})}
                    >
                      <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-[#F26522] rounded-xl">
                        <SelectValue placeholder="اختر الخدمة" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1A3B6C]">
                    رسالتك <span className="text-[#F26522]">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    required
                    rows={6}
                    className="text-lg border-2 border-gray-200 focus:border-[#F26522] rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl text-white font-bold text-lg shadow-xl flex items-center justify-center gap-3"
                  style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      تواصل عبر الواتساب
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Map Note Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <MapPin className="w-16 h-16 text-[#F26522] mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                موقعنا
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                يقع مكتبنا الرئيسي في قلب مدينة نجامينا، تشاد. نحن نخدم العملاء في جميع أنحاء المنطقة ودولياً.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}