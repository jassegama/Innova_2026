import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';

export const DesignConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    
    const advice = await getDesignAdvice(query);
    
    setResponse(advice);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-brand-cyan/20 text-brand-cyan rounded-full text-sm font-semibold mb-6 border border-brand-cyan/30">
              <Sparkles className="w-4 h-4" />
              <span>AI Powered</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Not sure about colors? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">
                Ask our AI Consultant.
              </span>
            </h2>
            <p className="text-brand-light/80 text-lg mb-8 leading-relaxed font-light">
              Describe your room, lighting conditions, or the mood you want to achieve. Our AI Design Assistant, powered by Gemini, will suggest color palettes and finishing touches instantly.
            </p>
            
            <form onSubmit={handleAskAI} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. 'I have a small north-facing bedroom. What colors make it cozy?'"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-6 pr-14 text-white placeholder-brand-light/40 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent backdrop-blur-sm"
              />
              <button 
                type="submit"
                disabled={loading || !query.trim()}
                className="absolute right-2 top-2 p-2 bg-brand-cyan text-brand-navy rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 min-h-[300px] flex flex-col shadow-2xl">
              <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red to-rose-500 flex items-center justify-center text-white font-bold shadow-lg">
                  AI
                </div>
                <div>
                  <h4 className="font-semibold text-white">Innova Design Assistant</h4>
                  <p className="text-xs text-brand-cyan">Powered by Google Gemini</p>
                </div>
              </div>

              <div className="flex-grow">
                {loading ? (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-3 py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-brand-cyan" />
                    <p className="text-sm">Analyzing your request...</p>
                  </div>
                ) : response ? (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-brand-light/90 leading-relaxed whitespace-pre-line">{response}</p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-brand-light/30 py-12 text-center">
                    <Sparkles className="w-12 h-12 mb-4 opacity-50" />
                    <p>Enter your design question to get started.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};