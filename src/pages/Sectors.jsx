import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft } from 'lucide-react';
import SEO, { BreadcrumbSchema } from '../components/SEO';

export default function Sectors() {
  const sectors = [
    {
      title: 'منظمات إنسانية',
      description: 'توريد الغذاء والمستلزمات الطبية والمعدات الإغاثية للمنظمات الإنسانية العاملة في المنطقة',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/d.png'
    },
    {
      title: 'السلع الاستهلاكية السريعة',
      description: 'توريد فعال وسريع لضمان توفر المنتجات الاستهلاكية في الأسواق بشكل مستمر',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/018.png'
    },
    {
      title: 'النفط والغاز',
      description: 'توريد معدات ومواد متخصصة للتشغيل والصيانة في قطاع النفط والغاز',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/oil-factory-territory-scaled.jpg'
    },
    {
      title: 'الاتصالات',
      description: 'توريد معدات وأجهزة اتصالات متقدمة لدعم البنية التحتية للاتصالات',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/amazing-beautiful-sky-with-clouds-with-antenna-scaled.jpg'
    },
    {
      title: 'البنوك والمؤسسات المالية',
      description: 'توريد معدات وتقنيات وبرامج حديثة لتطوير الخدمات المالية والمصرفية',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/paperwork-2048x1367.jpg'
    },
    {
      title: 'الطاقة الشمسية',
      description: 'حلول متقدمة ومعدات للطاقة المتجددة للحفاظ على البيئة وتوفير الطاقة',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/chelsea-WvusC5M-TM8-unsplash-2048x1536.jpg'
    },
    {
      title: 'القطاع الحكومي',
      description: 'خدمات توريد مخصصة لجميع الجهات الحكومية مع الالتزام بأعلى معايير الجودة',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/توريدات-القطاعات-الحكومية-2048x1024.png'
    },
    {
      title: 'المواد الزراعية والأسمدة',
      description: 'توريد مواد زراعية وأسمدة عالية الجودة لدعم القطاع الزراعي وزيادة الإنتاجية',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/017.png'
    },
    {
      title: 'الرعاية الصحية',
      description: 'توريد الأدوية والمعدات الطبية والمستلزمات الصحية المعتمدة عالمياً',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/013.png'
    },
    {
      title: 'قطاع التعليم',
      description: 'توريد المناهج التعليمية والمعدات والمعامل لتطوير البنية التحتية التعليمية',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/014.png'
    },
    {
      title: 'المرافق الرياضية',
      description: 'توريد معدات وملابس ومستلزمات رياضية متنوعة للمرافق الرياضية والأندية',
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/016.png'
    }
  ];

  return (
    <>
      <SEO
        title="القطاعات التي نخدمها - منظمات إنسانية، نفط وغاز، صحة، تعليم | GBS"
        description="نخدم 11+ قطاع حيوي: المنظمات الإنسانية، النفط والغاز، الاتصالات، البنوك، الطاقة الشمسية، القطاع الحكومي، الزراعة، الصحة، التعليم والمرافق الرياضية."
        keywords="توريدات قطاع النفط والغاز, توريدات طبية تشاد, توريدات حكومية, منظمات إنسانية تشاد, FMCG supplies Chad, telecommunications equipment"
        url="https://globizsupplies.com/sectors"
      />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' },
          { name: 'القطاعات', url: 'https://globizsupplies.com/sectors' }
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
            <span className="text-[#F26522] font-semibold">قطاعاتنا</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">القطاعات التي نخدمها</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            نفخر بخدمة مجموعة واسعة من القطاعات الحيوية بحلول متخصصة
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3B6C]/80 via-[#1A3B6C]/40 to-transparent"></div>
                  
                  {/* Index Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#F26522] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1A3B6C] mb-3 group-hover:text-[#F26522] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F26522] to-[#e55812] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  تميزنا في الأرقام
                </h2>
                <p className="text-xl text-gray-200">
                  نتائج حقيقية من سنوات الخبرة والالتزام
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#F26522] mb-2">11+</div>
                  <div className="text-white text-lg">قطاع متخصص</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#F26522] mb-2">500+</div>
                  <div className="text-white text-lg">مشروع ناجح</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#F26522] mb-2">100+</div>
                  <div className="text-white text-lg">شريك عالمي</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#F26522] mb-2">24/7</div>
                  <div className="text-white text-lg">دعم العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-6">
            هل قطاعك ضمن قائمتنا؟
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            تواصل معنا للحصول على حل مخصص يناسب احتياجات قطاعك بشكل مثالي
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="btn-primary px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl inline-flex items-center gap-3"
          >
            تواصل معنا للحصول على حل مخصص
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}