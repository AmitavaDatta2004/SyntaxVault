"use client";

import { Suspense } from 'react';
import { useState } from 'react';
import { Hero } from './components/hero';
import { CodeCard } from './components/code-card';
import { Footer } from './components/footer';
import { codeSnippets } from './data/code-snippets';
import { motion } from 'framer-motion';

function CodeList({ selectedCategory }: { selectedCategory: string }) {
  const filteredSnippets = selectedCategory === 'all'
    ? codeSnippets
    : codeSnippets.filter(snippet => snippet.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredSnippets.map((snippet, index) => (
        <motion.div
          key={snippet.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <CodeCard snippet={snippet} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'Algorithms', 'Data Structures', 'Projects', 'Assignments'];

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <CodeList selectedCategory={selectedCategory} />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}