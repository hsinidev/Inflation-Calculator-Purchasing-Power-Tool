import React, { useState } from 'react';

interface ThemeLayoutProps {
  children: React.ReactNode;
}

const Modal: React.FC<{ title: string; content: React.ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose}>
        <div className="bg-slate-800 border border-slate-600 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-slate-800 border-b border-slate-600 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
            </div>
            <div className="p-6 text-slate-300">
                {content}
            </div>
        </div>
    </div>
);


const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const navLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];

  const getModalContent = (modalName: string) => {
    switch(modalName) {
        case "About": return <p>This Inflation Calculator is a modern financial tool designed to demonstrate the effects of inflation on purchasing power over time. Built with React and Tailwind CSS by Mohamed Hsini.</p>;
        case "Contact": return <p>For inquiries, please reach out to hsini.web@gmail.com or visit doodax.com.</p>;
        case "Guide": return <p>To use the calculator, enter an initial amount, a start year, and an end year. Then, click 'Calculate Purchasing Power' to see how the value of your money has changed.</p>;
        case "Privacy Policy": return <p>We respect your privacy. This application does not collect, store, or share any personal data from its users. All calculations are performed within your browser.</p>;
        case "Terms of Service": return <p>This tool is provided for informational purposes only and does not constitute financial advice. The data is simulated and should not be used for official financial planning.</p>;
        case "DMCA": return <p>If you believe that any content on this site infringes upon your copyright, please contact us at hsini.web@gmail.com with the necessary information for a takedown request.</p>;
        default: return null;
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-4 px-6 md:px-12 backdrop-blur-sm bg-black/30 border-b border-slate-700/50 sticky top-0">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white tracking-wider">Inflation Calculator</h1>
            <nav className="hidden md:flex space-x-4">
              {navLinks.map(link => (
                <button key={link} onClick={() => setActiveModal(link)} className="text-slate-300 hover:text-yellow-400 transition-colors">
                  {link}
                </button>
              ))}
            </nav>
            <button className="md:hidden text-slate-300" onClick={() => setActiveModal('menu')}>
              Menu
            </button>
          </div>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="py-6 px-6 text-center bg-black/50 border-t border-slate-700/50">
          <div className="text-slate-400">
            <p className="mb-2">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline font-bold">HSINI MOHAMED</a>
            </p>
            <p className="text-sm">
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:text-yellow-400">hsini.web@gmail.com</a>
            </p>
          </div>
        </footer>
      </div>

      {activeModal && activeModal !== 'menu' && (
        <Modal 
            title={activeModal} 
            content={getModalContent(activeModal)} 
            onClose={() => setActiveModal(null)} 
        />
      )}
      
      {activeModal === 'menu' && (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 md:hidden" onClick={() => setActiveModal(null)}>
            <div className="bg-slate-800 rounded-lg p-8 w-11/12">
                <nav className="flex flex-col space-y-4 text-center">
                {navLinks.map(link => (
                    <button key={link} onClick={() => { setActiveModal(link); }} className="text-slate-300 hover:text-yellow-400 transition-colors text-lg">
                    {link}
                    </button>
                ))}
                </nav>
            </div>
         </div>
      )}
    </div>
  );
};

export default ThemeLayout;