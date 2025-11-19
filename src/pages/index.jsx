import Layout from "./Layout.jsx";

import Home from "./Home";

import About from "./About";

import Services from "./Services";

import Sectors from "./Sectors";

import WhyUs from "./WhyUs";

import Contact from "./Contact";

import Blog from "./Blog";

import BlogPost from "./BlogPost";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    About: About,
    
    Services: Services,
    
    Sectors: Sectors,
    
    WhyUs: WhyUs,
    
    Contact: Contact,
    
    Blog: Blog,
    
    BlogPost: BlogPost,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Services" element={<Services />} />
                
                <Route path="/Sectors" element={<Sectors />} />
                
                <Route path="/WhyUs" element={<WhyUs />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/BlogPost" element={<BlogPost />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}