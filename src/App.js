import logo from './logo.svg';
import './App.css';
import ColorGenerator from './components/ColorGenerator';
import ThemeToggle from './components/ThemeToggle';
function App() {
  return (
    <div className="App flex flex-col bg-base-300 text-base-content min-h-screen relative">
      <header className="bg-base-100 text-base-content py-4 shadow-md">
        <div className="flex items-center justify-center mb-8 mt-4 relative">
          <h1 className="text-3xl font-bold">Tailwind Color Generator</h1>
          <ThemeToggle className="ml-4" />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-base-100 rounded-lg shadow-lg p-6  mb-8">
          <ColorGenerator />

        </div>
      </main>
    </div>
  );
}

export default App;
