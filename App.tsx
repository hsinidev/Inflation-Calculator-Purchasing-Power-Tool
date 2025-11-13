import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import InflationCalculatorTool from './components/InflationCalculatorTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
          The <span className="text-yellow-400">Inflation</span> Calculator
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 animate-fade-in-up">
          Discover the true value of your money over time. Instantly calculate historical purchasing power and understand the real impact of inflation on your savings and investments.
        </p>
        
        <InflationCalculatorTool />
        <SeoArticle />
      </div>
    </ThemeLayout>
  );
};

export default App;