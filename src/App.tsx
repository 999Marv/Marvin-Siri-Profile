import { useState } from 'react';
import Navigation from './components/Navigation';
import ContentSections from './components/ContentSections';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-cream">
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed left-0 top-0 h-full w-64 overflow-y-auto bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <Navigation />
      </aside>

      <main className="flex-1 md:ml-64 pt-5 md:pt-0">
        <ContentSections />
      </main>
    </div>
  );
}

export default App;
