import React, { useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';
import type { BlogPost } from '../types/portfolio';
import { ArticleModal } from './ArticleModal';

export const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="journey" className="py-20 bg-cream-200 border-t border-cream-400/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-semibold block mb-2">
            My Data Journey • Learning in Public
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal-900 tracking-tight">
            Reflections, notes, and technical discoveries.
          </h2>
          <p className="text-sm text-charcoal-600 mt-2">
            Documenting what I learn about Python data structures, database schemas, and exploratory workflows as an undergraduate.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="rounded-2xl bg-cream-100 border border-cream-400 p-6 flex flex-col justify-between shadow-soft-sm hover:shadow-soft-md hover:border-charcoal-500 transition-all cursor-pointer group"
            >
              <div className="space-y-3.5">
                
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs font-mono text-charcoal-500">
                  <span className="text-teal-800 font-semibold uppercase tracking-wider text-[11px] bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-heading font-bold text-lg text-charcoal-900 group-hover:text-teal-800 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-charcoal-600 px-2 py-0.5 rounded bg-cream-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Call to Action */}
              <div className="pt-5 mt-5 border-t border-cream-300 flex items-center justify-between">
                <span className="text-xs font-heading font-semibold text-charcoal-800 group-hover:text-teal-800 transition-colors inline-flex items-center gap-1">
                  Read Technical Note
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-xs font-mono text-charcoal-500">
                  {post.date}
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
