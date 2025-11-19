import { useEffect } from 'react';

export default function SEO({
  title = 'Global Business & Suppliers - شريكك التجاري الموثوق',
  description = 'شركة رائدة في التجارة والاستيراد والتصدير والخدمات اللوجستية. نقدم حلول متكاملة للشركات في تشاد وأفريقيا مع التزام بأعلى معايير الجودة.',
  keywords = 'شركة استيراد وتصدير, خدمات لوجستية, توريد مواد, شركة تشاد, Global Business Suppliers, Chad trading company',
  image = 'https://globizsupplies.com/wp-content/uploads/2023/10/paperwork-scaled.jpg',
  url = 'https://globizsupplies.com',
  type = 'website',
  author = 'Global Business & Suppliers',
  publishedTime,
  modifiedTime,
  article = false
}) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic SEO
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    
    // Language and locale
    setMetaTag('language', 'Arabic');
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');

    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'Global Business & Suppliers', true);
    setMetaTag('og:locale', 'ar_AR', true);
    setMetaTag('og:locale:alternate', 'en_US', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:site', '@globizsupplies');
    setMetaTag('twitter:creator', '@globizsupplies');

    // Article specific
    if (article) {
      setMetaTag('article:publisher', 'Global Business & Suppliers', true);
      setMetaTag('article:author', author, true);
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime, true);
      }
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, article]);

  return null;
}

// Helper function to generate structured data
export function generateStructuredData(type, data) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
    />
  );
}

// Organization structured data
export function OrganizationSchema() {
  const data = {
    name: 'Global Business & Suppliers',
    alternateName: 'GBS',
    url: 'https://globizsupplies.com',
    logo: 'https://globizsupplies.com/logo.png',
    description: 'شركة رائدة في التجارة والاستيراد والتصدير والخدمات اللوجستية في تشاد وأفريقيا',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue de 40, BP: 7514',
      addressLocality: 'N\'djamena',
      addressCountry: 'TD'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+235-61745555',
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'French', 'English']
    },
    sameAs: [
      'https://www.facebook.com/globizsupplies',
      'https://twitter.com/globizsupplies',
      'https://www.linkedin.com/company/globizsupplies'
    ]
  };

  return generateStructuredData('Organization', data);
}

// Breadcrumb structured data
export function BreadcrumbSchema({ items }) {
  const data = {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return generateStructuredData('BreadcrumbList', data);
}

// Article structured data
export function ArticleSchema({ article }) {
  const data = {
    headline: article.title,
    description: article.excerpt,
    image: article.featured_image,
    datePublished: article.published_date,
    dateModified: article.updated_date,
    author: {
      '@type': 'Person',
      name: article.author_name
    },
    publisher: {
      '@type': 'Organization',
      name: 'Global Business & Suppliers',
      logo: {
        '@type': 'ImageObject',
        url: 'https://globizsupplies.com/logo.png'
      }
    }
  };

  return generateStructuredData('Article', data);
}