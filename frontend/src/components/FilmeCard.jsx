import React from 'react';

const FilmeCard = ({ filme }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
      <img
        src={filme.Poster !== 'N/A' ? filme.Poster : 'https://via.placeholder.com/400x550?text=Poster+Indispon%C3%ADvel'}
        alt={`Pôster de ${filme.Title}`}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold truncate" title={filme.Title}>{filme.Title}</h3>
        <div className="flex justify-between items-center mt-2">
            <p className="text-gray-400">{filme.Year}</p>
            <span className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full uppercase">{filme.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default FilmeCard;
