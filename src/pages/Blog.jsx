import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { base44 } from '@/api/base44Client';
import { Calendar, Clock, ArrowLeft, Search, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import SEO, { BreadcrumbSchema } from '../components/SEO';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await base44.entities.Article.filter({ published: true }, '-published_date');
        setArticles(data || []);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadArticles();
  }, []);

  const categories = ['الكل', 'أخبار', 'خدمات', 'قطاعات', 'نصائح', 'دراسات حالة', 'تقنية'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = filteredArticles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <>
      <SEO
        title="المدونة - أخبار ومقالات عن التجارة والخدمات اللوجستية | GBS"
        description="اقرأ أحدث المقالات والأخبار عن التجارة الدولية، الخدمات اللوجستية، وحلول الأعمال في أفريقيا. نصائح وخبرات من Global Business & Suppliers."
        keywords="مدونة التجارة الدولية, أخبار الخدمات اللوجستية, مقالات تجارية, Chad business blog, نصائح الاستيراد والتصدير"
        url="https://globizsupplies.com/blog"
      />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' },
          { name: 'المدونة', url: 'https://globizsupplies.com/blog' }
        ]}
      />

      <div>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26522] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-block mb-6 px-4 py-2 bg-[#F26522]/20 backdrop-blur-sm rounded-full border border-[#F26522]/30">
                <span className="text-[#F26522] font-semibold">مدونتنا</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">المدونة والأخبار</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                اكتشف آخر الأخبار والمقالات والنصائح في عالم التجارة والخدمات اللوجستية
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="ابحث في المقالات..."
                      className="h-12 pr-12 bg-white border-0 text-lg"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap md:flex-nowrap">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                          selectedCategory === category
                            ? 'bg-[#F26522] text-white'
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="text-center py-20">
                <div className="inline-block w-12 h-12 border-4 border-[#F26522] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">لا توجد مقالات حالياً</p>
              </div>
            ) : (
              <>
                {/* Featured Article */}
                {featuredArticle && (
                  <div className="mb-16">
                    <Link
                      to={createPageUrl(`BlogPost?slug=${featuredArticle.slug}`)}
                      className="group block"
                    >
                      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                          <div className="relative h-96 lg:h-auto">
                            <img
                              src={featuredArticle.featured_image}
                              alt={featuredArticle.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-6 right-6">
                              <Badge className="bg-[#F26522] text-white text-sm px-4 py-2">
                                مقال مميز
                              </Badge>
                            </div>
                          </div>
                          <div className="p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4">
                              <Badge variant="outline" className="text-[#1A3B6C]">
                                {featuredArticle.category}
                              </Badge>
                              <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(featuredArticle.published_date).toLocaleDateString('ar-SA')}</span>
                              </div>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A3B6C] mb-4 group-hover:text-[#F26522] transition-colors">
                              {featuredArticle.title}
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                              {featuredArticle.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-gray-500">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{featuredArticle.reading_time} دقيقة قراءة</span>
                              </div>
                              <div className="flex items-center gap-2 text-[#F26522] font-semibold group-hover:gap-3 transition-all">
                                اقرأ المزيد
                                <ArrowLeft className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Regular Articles Grid */}
                {regularArticles.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={createPageUrl(`BlogPost?slug=${article.slug}`)}
                        className="group"
                      >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={article.featured_image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3B6C]/60 to-transparent"></div>
                            <div className="absolute bottom-4 right-4">
                              <Badge className="bg-[#F26522]/90 backdrop-blur-sm text-white">
                                {article.category}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(article.published_date).toLocaleDateString('ar-SA')}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.reading_time} دقيقة</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A3B6C] mb-3 group-hover:text-[#F26522] transition-colors line-clamp-2">
                              {article.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4 flex-1 line-clamp-3">
                              {article.excerpt}
                            </p>
                            {article.tags && article.tags.length > 0 && (
                              <div className="flex items-center gap-2 flex-wrap mb-4">
                                {article.tags.slice(0, 3).map((tag, idx) => (
                                  <span key={idx} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-[#F26522] font-semibold group-hover:gap-3 transition-all">
                              اقرأ المزيد
                              <ArrowLeft className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}