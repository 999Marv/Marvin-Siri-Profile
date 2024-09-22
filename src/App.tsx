import Navigation from './components/Navigation';
import ContentSections from './components/ContentSections';

function App() {
  return (
    <div className="flex min-h-screen bg-cream">
      <aside className="fixed left-0 top-0 h-full w-64 overflow-y-auto">
        <Navigation />
      </aside>
      <main className="flex-1 ml-64">
        <ContentSections />
      </main>
    </div>
  );
}

export default App;
