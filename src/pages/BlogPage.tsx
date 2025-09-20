import React from 'react';
import { Calendar, User, ChevronRight, Search } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    title: 'New California Tenant Protection Laws: What Changed in 2025',
    excerpt: 'Understanding the latest updates to AB 1482, new rent control measures, and expanded tenant rights across Southern California.',
    date: '2025-01-15',
    author: 'The Brinton Firm Legal Team',
    category: 'Legal Updates',
    image: 'Featured article placeholder - Professional legal team discussing tenant rights legislation',
    readTime: '8 min read',
  };

  const categories = [
    { name: 'Tenant Rights', count: 15 },
    { name: 'Landlord Harassment', count: 12 },
    { name: 'Eviction Defense', count: 18 },
    { name: 'Security Deposits', count: 8 },
    { name: 'Rent Control', count: 10 },
    { name: 'Legal Updates', count: 6 },
  ];

  const recentPosts = [
    {
      title: 'How to Document Landlord Harassment: A Step-by-Step Guide',
      excerpt: 'Proper documentation is crucial for building a strong harassment case against your landlord.',
      date: '2025-01-10',
      category: 'Landlord Harassment',
      readTime: '6 min read',
    },
    {
      title: 'Security Deposit Laws: What Landlords Can and Cannot Charge For',
      excerpt: 'Understanding your rights when it comes to security deposit deductions and returns.',
      date: '2025-01-08',
      category: 'Security Deposits',
      readTime: '5 min read',
    },
    {
      title: 'Mold in Your Apartment: Health Risks and Legal Rights',
      excerpt: 'What to do when your landlord ignores dangerous mold conditions in your home.',
      date: '2025-01-05',
      category: 'Tenant Rights',
      readTime: '7 min read',
    },
    {
      title: 'Ellis Act Evictions: Your Rights and Protections',
      excerpt: 'Understanding when Ellis Act evictions are legitimate and when they constitute abuse.',
      date: '2025-01-03',
      category: 'Eviction Defense',
      readTime: '9 min read',
    },
    {
      title: 'Rent Control in Los Angeles: A Complete Guide for 2025',
      excerpt: 'Navigate LA\'s complex rent stabilization laws and know your rights as a tenant.',
      date: '2024-12-28',
      category: 'Rent Control',
      readTime: '10 min read',
    },
    {
      title: 'What Constitutes Uninhabitable Living Conditions?',
      excerpt: 'Legal standards for habitability and when you can take action against your landlord.',
      date: '2024-12-25',
      category: 'Tenant Rights',
      readTime: '8 min read',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tenant Rights Knowledge Center
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stay informed about your rights with expert legal insights, practical guides, 
              and the latest updates in California tenant law.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Search */}
            <div className="lg:w-2/3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tenant rights topics..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="lg:w-1/3">
              <h3 className="text-lg font-semibold text-primary mb-4">Browse by Category</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-accent hover:bg-accent/5 transition-colors text-left"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary to-gray-700 rounded-2xl p-8 text-white min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg text-accent mb-4">Featured Article</div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  {featuredPost.image}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                  {featuredPost.category}
                </span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">
                  {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center text-gray-500 mb-6">
                <User className="h-4 w-4 mr-2" />
                <span>{featuredPost.author}</span>
              </div>

              <button className="btn-primary text-lg px-6 py-3 flex items-center">
                Read Full Article
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Recent Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with the latest tenant rights information and legal guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 leading-tight hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>

                    <button className="text-accent font-semibold hover:text-primary transition-colors flex items-center">
                      Read More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-outline text-lg px-8 py-4">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Informed About Your Rights
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get the latest tenant rights updates, legal tips, and case results delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="btn-accent px-6 py-3 whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-gray-300 text-sm mt-4">
            Free newsletter • No spam • Unsubscribe anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;