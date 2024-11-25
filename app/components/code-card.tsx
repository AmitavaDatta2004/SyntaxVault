"use client";

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { type CodeSnippet } from '../data/code-snippets';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import cpp from 'highlight.js/lib/languages/cpp';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import c from 'highlight.js/lib/languages/c';
import 'highlight.js/styles/github-dark.css';

// Register only the languages we need
hljs.registerLanguage('python', python);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('c', c);

export function CodeCard({ snippet }: { snippet: CodeSnippet }) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    try {
      const highlighted = hljs.highlight(snippet.code, {
        language: snippet.language.toLowerCase(),
      }).value;
      setHighlightedCode(highlighted);
    } catch (error) {
      console.error('Error highlighting code:', error);
      setHighlightedCode(snippet.code);
    }
  }, [snippet.code, snippet.language]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{snippet.title}</h3>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Copy code"
          >
            <Copy className={copied ? 'text-green-500' : 'text-white'} size={20} />
          </button>
        </div>
        <p className="text-zinc-400 mb-4">{snippet.description}</p>
        <div className="relative">
          <pre className="overflow-x-auto p-4 bg-zinc-800 rounded-lg">
            <code
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
              className={`language-${snippet.language.toLowerCase()} hljs`}
            />
          </pre>
        </div>
      </div>
    </motion.div>
  );
}