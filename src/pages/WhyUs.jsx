import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Globe, Award, Wrench, HeadphonesIcon, Lightbulb, ArrowLeft, CheckCircle } from 'lucide-react';
import SEO, { BreadcrumbSchema } from '../components/SEO';

export default function WhyUs() {
  const features = [
    {
      icon: Globe,
      title: 'الخبرة العالمية',
      description: 'فريق ذو خبرة واسعة في الأسواق الدولية مع فهم عميق للثقافات التجارية المختلفة وأفضل الممارسات العالمية',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'الجودة والموثوقية',
      description: 'التزام صارم بمعايير الجودة العالمية في كل عملية، مع شهادات وتراخيص معتمدة دولياً',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wrench,
      title: 'الحلول المخصصة',
      description: 'حلول مصممة خصيصاً لتلبية احتياجات عملائنا الفريدة مع مرونة عالية في التنفيذ',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: HeadphonesIcon,
      title: 'الدعم المستمر',
      description: 'خدمة عملاء متفانية ومتاحة 24/7 قبل وأثناء وبعد البيع لضمان رضا العملاء الكامل',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'الابتكار والتطوير',
      description: 'استخدام أحدث التقنيات والأساليب المبتكرة لتقديم أفضل الخدمات وتحقيق نتائج متميزة',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'أسعار تنافسية مع جودة عالية مضمونة',
    'شبكة واسعة من الموردين والشركاء الموثوقين',
    'سرعة في التنفيذ والتسليم حسب المواعيد المحددة',
    'فريق محترف ومؤهل في جميع التخصصات',
    'حلول مالية مرنة تناسب مختلف الميزانيات',
    'شفافية كاملة في التعاملات والتسعير'
  ];

  return (
    <>
      <SEO
        title="لماذا نحن - خبرة عالمية وجودة موثوقة | Global Business & Suppliers"
        description="اختر Global Business & Suppliers: خبرة عالمية 15+ سنة، جودة معتمدة، حلول مخصصة، دعم 24/7، ابتكار مستمر، أسعار تنافسية، وشبكة شركاء عالمية."
        keywords="لماذا تختارنا, مميزات الشركة, خبرة تجارية عالمية, جودة موثوقة تشاد, شركة معتمدة, why choose us trading company"
        url="https://globizsupplies.com/why-us"
      />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' },
          { name: 'لماذا نحن', url: 'https://globizsupplies.com/why-us' }
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
            <span className="text-[#F26522] font-semibold">تميزنا</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">لماذا تختارنا؟</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            نجمع بين الخبرة العالمية والجودة العالية والابتكار المستمر
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-[#F5F5F5] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Background Gradient */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300`}></div>
                
                <div className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1A3B6C] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#F26522]/5 to-transparent rounded-tr-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://globizsupplies.com/wp-content/uploads/2023/10/paperwork-scaled.jpg"
                  alt="لماذا نحن"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3B6C]/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F26522]/20 rounded-3xl blur-2xl"></div>
            </div>

            {/* Benefits List */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-[#1A3B6C] mb-8">
                مزايا إضافية تميزنا
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#F26522] to-[#e55812] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed pt-0.5">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Style Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block w-16 h-16 bg-[#F26522] rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                التزامنا تجاه عملائنا
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                نحن لا نقدم مجرد منتجات أو خدمات، بل نبني شراكات طويلة الأمد مبنية على الثقة والشفافية والنتائج الملموسة. نجاحكم هو نجاحنا، ورضاكم هو أولويتنا القصوى.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-6">
            جاهز لبدء الشراكة معنا؟
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك التجارية
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="btn-primary px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl inline-flex items-center gap-3"
          >
            تواصل معنا الآن
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}