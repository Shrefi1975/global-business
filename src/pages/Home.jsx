import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Globe, TrendingUp, Award, Users, Target, Eye, Lightbulb, Handshake, Shield, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import SEO, { OrganizationSchema, BreadcrumbSchema } from '../components/SEO';
import { useTranslation } from '../components/translations';

export default function Home() {
  const { t, isRTL } = useTranslation();
  
  const stats = [
    { icon: Globe, value: '50+', label: t.home.stats.countriesServed },
    { icon: Users, value: '1000+', label: t.home.stats.satisfiedClients },
    { icon: Award, value: '15+', label: t.home.stats.yearsExperience },
    { icon: TrendingUp, value: '95%', label: t.home.stats.satisfactionRate }
  ];

  const whyUsFeatures = [
    {
      icon: Globe,
      title: t.home.whyUs.globalExpertise,
      description: t.home.whyUs.globalExpertiseDesc,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: t.home.whyUs.quality,
      description: t.home.whyUs.qualityDesc,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: t.home.whyUs.innovation,
      description: t.home.whyUs.innovationDesc,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t.home.values.innovation,
      description: t.home.values.innovationDesc,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Handshake,
      title: t.home.values.partnership,
      description: t.home.values.partnershipDesc,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Shield,
      title: t.home.values.commitment,
      description: t.home.values.commitmentDesc,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const services = [
    {
      title: t.home.services.trading,
      description: t.home.services.tradingDesc,
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/trip.png'
    },
    {
      title: t.home.services.logistics,
      description: t.home.services.logisticsDesc,
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/logistic-1.png'
    },
    {
      title: t.home.services.facility,
      description: t.home.services.facilityDesc,
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/facility-management-1.png'
    },
    {
      title: t.home.services.construction,
      description: t.home.services.constructionDesc,
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/building-construction.png'
    },
    {
      title: t.home.services.carRental,
      description: t.home.services.carRentalDesc,
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/rental-car-2.png'
    },
    {
      title: t.home.services.equipmentRental,
      description: t.home.services.equipmentRentalDesc,
      icon: 'https://globizsupplies.com/wp-content/uploads/2025/03/excavator-1.png'
    }
  ];

  const sectors = [
    {
      title: t.home.sectors.humanitarian,
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/d.png'
    },
    {
      title: t.home.sectors.consumer,
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/018.png'
    },
    {
      title: t.home.sectors.oil,
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/oil-factory-territory-scaled.jpg'
    },
    {
      title: t.home.sectors.telecom,
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/amazing-beautiful-sky-with-clouds-with-antenna-scaled.jpg'
    },
    {
      title: t.home.sectors.government,
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/توريدات-القطاعات-الحكومية-2048x1024.png'
    },
    {
      title: t.home.sectors.healthcare,
      image: 'https://globizsupplies.com/wp-content/uploads/2023/10/013.png'
    }
  ];

  return (
    <>
      <SEO
        title="Global Business & Suppliers - شركة رائدة في الاستيراد والتصدير والخدمات اللوجستية في تشاد"
        description="نقدم حلول تجارية شاملة في تشاد وأفريقيا: استيراد وتصدير، نقل ولوجستيات، إدارة مرافق، تأجير معدات، وخدمات عقارية. خبرة عالمية وجودة موثوقة."
        keywords="شركة استيراد وتصدير تشاد, خدمات لوجستية أفريقيا, توريدات تشاد, شركة تجارة دولية, Chad trading company, import export services, توريد مواد طبية, تأجير معدات ثقيلة, Chad business solutions"
        url="https://globizsupplies.com"
      />
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' }
        ]}
      />
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
            alt="Global Business"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-[#F26522]/20 backdrop-blur-sm rounded-full border border-[#F26522]/30">
              <span className="text-[#F26522] font-semibold text-sm">{t.common.partner}</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.home.hero.title}
              <span className="block text-[#F26522] mt-2">{t.home.hero.subtitle}</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              {t.home.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl('Services')}
                className="btn-primary px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl inline-flex items-center gap-2"
              >
                {t.home.hero.discoverServices}
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl('Contact')}
                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                {t.home.hero.contactUs}
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#F26522]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F26522] to-[#e55812] rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#1A3B6C] mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
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
              <div className="inline-block mb-2 px-4 py-2 bg-[#F26522]/10 rounded-full">
                <span className="text-[#F26522] font-semibold text-sm">{t.home.about.badge}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-6">
                {t.home.about.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.home.about.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F26522] to-[#e55812] rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A3B6C] mb-1">{t.home.about.mission}</h3>
                    <p className="text-gray-600 text-sm">{t.home.about.missionText}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A3B6C] mb-1">{t.home.about.vision}</h3>
                    <p className="text-gray-600 text-sm">{t.home.about.visionText}</p>
                  </div>
                </div>
              </div>

              <Link
                to={createPageUrl('About')}
                className="inline-flex items-center gap-2 text-[#F26522] font-semibold hover:gap-3 transition-all mt-6"
              >
                {t.common.readMore}
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#F26522]/10 rounded-full">
              <span className="text-[#F26522] font-semibold text-sm">{t.home.whyUs.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-4">
              {t.home.whyUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A3B6C] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features / Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#F26522]/10 rounded-full">
              <span className="text-[#F26522] font-semibold text-sm">{t.home.values.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-4">
              {t.home.values.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.values.subtitle}
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

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#F26522]/10 rounded-full">
              <span className="text-[#F26522] font-semibold text-sm">{t.home.services.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-4">
              {t.home.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F5F5F5] to-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A3B6C] mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={createPageUrl('Services')}
              className="btn-primary px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl inline-flex items-center gap-3"
            >
              {t.home.services.viewAll}
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-[#F26522]/10 rounded-full">
              <span className="text-[#F26522] font-semibold text-sm">{t.home.sectors.badge}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A3B6C] mb-4">
              {t.home.sectors.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.home.sectors.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3B6C]/90 via-[#1A3B6C]/50 to-transparent"></div>
                  <div className="absolute bottom-4 right-0 left-0 px-4">
                    <h3 className="text-white font-bold text-sm text-center leading-tight">
                      {sector.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={createPageUrl('Sectors')}
              className="btn-primary px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl inline-flex items-center gap-3"
            >
              {t.home.sectors.viewAll}
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Contact Info */}
              <div className="p-12 relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522] rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block mb-4 px-4 py-2 bg-[#F26522]/20 backdrop-blur-sm rounded-full">
                    <span className="text-[#F26522] font-semibold text-sm">{t.home.contact.badge}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {t.home.contact.title}
                  </h2>
                  <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                    {t.home.contact.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F26522]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#F26522]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{t.home.contact.address}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Republic of Chad, City of N'djamena<br/>Rue de 40, BP: 7514
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F26522]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-[#F26522]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{t.home.contact.phone}</h3>
                        <p className="text-gray-300 text-sm">
                          +235-61745555<br/>+235-22533242
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F26522]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-[#F26522]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{t.home.contact.email}</h3>
                        <p className="text-gray-300 text-sm">info@globizsupplies.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white p-12 flex items-center justify-center">
                <div className="text-center max-w-md">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 shadow-xl">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1A3B6C] mb-4">
                    {t.whatsapp.contactVia}
                  </h3>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {t.whatsapp.connectVia}
                  </p>
                  <a
                    href="https://wa.me/23561745555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl inline-flex items-center gap-3"
                    style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.whatsapp.contactVia}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}