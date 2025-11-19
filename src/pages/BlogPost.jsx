import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { base44 } from '@/api/base44Client';
import { Calendar, Clock, User, ArrowRight, Tag, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEO, { ArticleSchema, BreadcrumbSchema } from '../components/SEO';

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articles = await base44.entities.Article.filter({ published: true, slug: slug });
        if (articles && articles.length > 0) {
          setArticle(articles[0]);
          
          // Load related articles
          const related = await base44.entities.Article.filter({ 
            published: true, 
            category: articles[0].category 
          }, '-published_date', 4);
          setRelatedArticles(related || []);
        }
      } catch (error) {
        console.error('Error loading article:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      loadArticle();
    }
  }, [slug]);

  useEffect(() => {
    if (article) {
      // Increment views
      base44.entities.Article.update(article.id, { 
        views: (article.views || 0) + 1 
      });

      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [article?.id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#F26522] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1A3B6C] mb-4">المقال غير موجود</h2>
          <Link
            to={createPageUrl('Blog')}
            className="text-[#F26522] hover:underline flex items-center gap-2 justify-center"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للمدونة
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={article.meta_title || `${article.title} | مدونة Global Business & Suppliers`}
        description={article.meta_description || article.excerpt}
        keywords={article.tags?.join(', ') || ''}
        image={article.featured_image}
        url={`https://globizsupplies.com/blog/${article.slug}`}
        type="article"
        article={true}
        author={article.author_name}
        publishedTime={article.published_date}
        modifiedTime={article.updated_date}
      />
      <ArticleSchema article={article} />
      <BreadcrumbSchema
        items={[
          { name: 'الرئيسية', url: 'https://globizsupplies.com' },
          { name: 'المدونة', url: 'https://globizsupplies.com/blog' },
          { name: article.title, url: `https://globizsupplies.com/blog/${article.slug}` }
        ]}
      />

      <article>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26522] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={createPageUrl('Blog')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              العودة للمدونة
            </Link>

            <Badge className="bg-[#F26522] text-white mb-4">
              {article.category}
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author_name || 'فريق GBS'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(article.published_date).toLocaleDateString('ar-SA', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.reading_time} دقيقة قراءة</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative -mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={article.featured_image}
                alt={article.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-[#1A3B6C] mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  الوسوم
                </h3>
                <div className="flex flex-wrap gap-3">
                  {article.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-base px-4 py-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 flex items-center justify-between p-6 bg-[#F5F5F5] rounded-2xl">
              <div>
                <h3 className="text-lg font-bold text-[#1A3B6C] mb-1">شارك هذا المقال</h3>
                <p className="text-gray-600">ساعد الآخرين على الاستفادة من هذا المحتوى</p>
              </div>
              <Button
                onClick={handleShare}
                className="bg-[#F26522] hover:bg-[#e55812] text-white flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                مشاركة
              </Button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.filter(a => a.id !== article.id).length > 0 && (
          <section className="py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A3B6C] mb-12 text-center">
                مقالات ذات صلة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles
                  .filter(a => a.id !== article.id)
                  .slice(0, 3)
                  .map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={createPageUrl(`BlogPost?slug=${relatedArticle.slug}`)}
                      className="group"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedArticle.featured_image}
                            alt={relatedArticle.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <Badge className="bg-[#F26522]/10 text-[#F26522] mb-3">
                            {relatedArticle.category}
                          </Badge>
                          <h3 className="text-xl font-bold text-[#1A3B6C] mb-2 group-hover:text-[#F26522] transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-gray-700 text-sm line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}