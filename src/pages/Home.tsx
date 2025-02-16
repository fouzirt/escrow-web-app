import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Shield, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Escrow Smart Contract FOB
        </h1>
        <p className="text-xl text-gray-600">
          Sécurisez vos transactions commerciales internationales avec la blockchain
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-indigo-600 mb-4">
            <Shield className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Sécurité</h3>
          <p className="text-gray-600">
            Paiements sécurisés et automatisés via smart contracts
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-indigo-600 mb-4">
            <Ship className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Suivi</h3>
          <p className="text-gray-600">
            Tracking en temps réel des conditions de livraison
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-indigo-600 mb-4">
            <Globe className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">International</h3>
          <p className="text-gray-600">
            Compatible avec les règles Incoterm FOB
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/contracts"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Créer un nouveau contrat
        </Link>
      </div>
    </div>
  );
};

export default Home;