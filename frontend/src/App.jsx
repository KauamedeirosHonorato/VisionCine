import { useState, useEffect } from 'react';
import FilmeCard from './components/FilmeCard';

function App() {
  const [busca, setBusca] = useState('Avengers');
  const [filmes, setFilmes] = useState([]);

  const buscaFilmes = async (titulo) => {
    if (!titulo) {
        setFilmes([]);
        return;
    }

    const apiKey = '9bf3861';
    const response = await fetch(`https://www.omdbapi.com/?s=${titulo}&apikey=${apiKey}`);
    const data = await response.json();

    if (data.Response === 'True') {
      setFilmes(data.Search);
    } else {
      setFilmes([]);
    }
  };

  useEffect(() => {
    buscaFilmes(busca);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    buscaFilmes(busca);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
        <header className="container mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-2">
                CineVerse
            </h1>
            <p className="text-gray-400 mt-2">Procure Seus Filmes & Games Prediletos aqui !</p>
        </header>

        <div className="container mx-auto mb-12 max-w-lg">
            <form onSubmit={handleSearch} className="flex shadow-lg rounded-full bg-gray-800 overflow-hidden">
                <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Qual filme você procura?"
                className="py-3 px-6 w-full bg-transparent focus:outline-none"
                />
                <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Buscar
                </button>
            </form>
        </div>

      {filmes.length > 0 ? (
        <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filmes.map((filme) => (
            <FilmeCard key={filme.imdbID} filme={filme} />
          ))}
        </main>
      ) : (
        <div className="container mx-auto text-center">
            <p className="text-gray-500 text-xl">Nenhum filme encontrado. Tente uma nova busca!</p>
        </div>
      )}
    </div>
  );
}

export default App;
