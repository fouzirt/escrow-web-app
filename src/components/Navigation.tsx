import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Contact as FileContract, Home } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Ship className="h-8 w-8" />
          <span className="text-xl font-bold">Escrow FOB</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
            <Home className="h-5 w-5" />
            <span>Accueil</span>
          </Link>
          <Link to="/contracts" className="flex items-center space-x-1 hover:text-indigo-200">
            <FileContract className="h-5 w-5" />
            <span>Contrats</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;