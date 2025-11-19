import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft } from 'lucide-react';
import SEO, { BreadcrumbSchema } from '../components/SEO';

export default function Services() {
  const services = [
    {
      title: 'التجارة والاستيراد والتصدير',
      description: 'تسهيل العمليات التجارية الدولية وتوفير حلول شاملة للاستيراد والتصدير عبر الحدود',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/trip.png',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'النقل واللوجستيات',
      description: 'خدمات شحن وتوزيع سريعة وموثوقة مع تتبع دقيق للشحنات في جميع أنحاء العالم',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/logistic-1.png',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'إدارة المرافق والصيانة',
      description: 'حلول متكاملة لإدارة المرافق والصيانة لضمان التشغيل السلس والفعال لأعمالك',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/facility-management-1.png',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'البناء والتجديد',
      description: 'خدمات بناء وتجديد احترافية باستخدام أحدث التقنيات والمعايير العالمية',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/building-construction.png',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'تأجير السيارات',
      description: 'سيارات 4WD وSUV وPickup لاحتياجات العمل والتنقل بأسعار تنافسية',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/rental-car-2.png',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'تأجير المعدات الثقيلة',
      description: 'معدات ثقيلة بأسعار تنافسية لمساعدة الشركات على إنجاز مشاريعها بكفاءة',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/excavator-1.png',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'العقارات وإدارة الممتلكات',
      description: 'تأجير الشقق والمنازل وإدارة احترافية للممتلكات العقارية',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/agreement.png',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'الموارد البشرية',
      description: 'توفير كوادر مؤهلة ومتخصصة لجميع القطاعات مع خدمات توظيف متكاملة',
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/select-2.png',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <>
      <SEO
        title="خدماتنا - استيراد وتصدير، لوجستيات، وإدارة مرافق | Global Business & Suppliers"
        description="خدمات شاملة: التجارة الدولية، النقل واللوجستيات، إدارة المرافق، البناء والتجديد، تأجير السيارات والمعدات الثقيلة، خدمات عقارية وموارد بشرية في تشاد."
        keywords="خدمات استيراد وتصدير, خدمات لوجستية تشاد, إدارة مرافق, تأجير معدات ثقيلة, Chad logistics services, freight forwarding Chad"
        url="https://globizsupplies.com/services"
      />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' },
          { name: 'خدماتنا', url: 'https://globizsupplies.com/services' }
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
            <span className="text-[#F26522] font-semibold">ما نقدمه</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">خدماتنا المتميزة</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية احتياجات أعمالك
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Background Gradient */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#F5F5F5] to-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A3B6C] leading-tight flex-1">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 right-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                الخدمات العامة
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                نقدم حلولاً متكاملة للمشاريع من التخطيط الأولي حتى التنفيذ النهائي، مع فريق محترف من الخبراء في جميع المجالات لضمان تحقيق أفضل النتائج وتجاوز توقعات عملائنا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-6">
            هل تحتاج إلى استشارة مجانية؟
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            فريقنا من الخبراء جاهز لمساعدتك في اختيار الخدمة المناسبة لاحتياجاتك
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="btn-primary px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl inline-flex items-center gap-3"
          >
            اطلب استشارة مجانية
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}