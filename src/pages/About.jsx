import React from 'react';
import { Lightbulb, Handshake, Shield, Target, Eye, MessageSquare } from 'lucide-react';
import SEO, { BreadcrumbSchema } from '../components/SEO';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'الابتكار',
      description: 'تشجيع التفكير المبتكر والإبداعي للوصول إلى نتائج استثنائية تتجاوز التوقعات',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Handshake,
      title: 'الشراكة',
      description: 'الإيمان العميق بقيمة التعاون والشراكة الاستراتيجية لتحقيق أهداف مشتركة ومستدامة',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'الالتزام',
      description: 'الالتزام الصارم بتقديم خدمات عالية الجودة والوفاء بكل وعودنا لعملائنا',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <>
      <SEO
        title="من نحن - Global Business & Suppliers | شركة رائدة في الحلول التجارية المتكاملة"
        description="تعرف على Global Business & Suppliers - شركة متخصصة في التجارة والخدمات العامة منذ 15 عام. رسالتنا، رؤيتنا، وقيمنا في خدمة الأسواق الأفريقية والعالمية."
        keywords="عن شركة Global Business Suppliers, رسالة ورؤية الشركة, قيم الشركة, شركة تجارة تشاد, about us trading company Chad"
        url="https://globizsupplies.com/about"
      />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' },
          { name: 'من نحن', url: 'https://globizsupplies.com/about' }
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
            <span className="text-[#F26522] font-semibold">نبذة عنا</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">من نحن</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            شركة متخصصة في تقديم حلول شاملة ومبتكرة في مجالات التجارة والخدمات العامة
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://globizsupplies.com/wp-content/uploads/2023/10/paperwork-scaled.jpg"
                  alt="من نحن"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3B6C]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#F26522]/20 rounded-3xl blur-2xl"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#1A3B6C] mb-6">
                شركة رائدة في الحلول التجارية المتكاملة
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                نحن شركة متخصصة في تقديم حلول شاملة ومبتكرة في مجالات التجارة والخدمات العامة والاستيراد والتصدير. نسعى دائمًا للتميز من خلال الاهتمام الدقيق بتفاصيل كل تحدي وتقديم حلول مخصصة تلبي احتياجات عملائنا المتنوعة.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                بفضل خبرتنا الواسعة وشبكتنا العالمية من الشركاء، نوفر خدمات متميزة تتراوح من التوريدات والخدمات اللوجستية إلى إدارة المشاريع والاستشارات التجارية، مع التزام صارم بأعلى معايير الجودة والاحترافية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F26522] to-[#e55812] opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F26522] to-[#e55812] rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#1A3B6C] mb-4">رسالتنا</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  توفير المستلزمات والخدمات المتميزة التي تلبي تطلعات عملائنا من حيث السعر التنافسي والجودة العالية وخدمات ما بعد البيع الاستثنائية، مع الحرص على بناء علاقات طويلة الأمد قائمة على الثقة والتميز.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#1A3B6C] mb-4">رؤيتنا</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  أن نصبح شركة معترف بها عالميًا كرائدة في مجالها، متميزة بدورها الفعّال في دعم الاستدامة الاجتماعية والبيئية، ومساهمتها في تطوير المجتمعات من خلال توفير حلول مبتكرة ومستدامة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              القيم التي نؤمن بها وتوجه عملنا اليومي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-[#F5F5F5] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${value.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A3B6C] mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F26522] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-16 h-16 text-[#F26522] mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            لنبدأ معًا رحلة النجاح
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            نحن هنا لمساعدتك على تحقيق أهدافك التجارية
          </p>
          <a
            href={`mailto:info@globizsupplies.com`}
            className="btn-primary px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl inline-block"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>
    </div>
    </>
  );
}