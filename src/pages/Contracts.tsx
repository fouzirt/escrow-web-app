import React from 'react';
import { Plus } from 'lucide-react';
import ConnectWallet from '../components/ConnectWallet';
import { EscrowContract } from '../components/Escrow/EscrowContract';
import { useAccount } from 'wagmi';

const Contracts: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Contrats Escrow FOB</h1>
        {isConnected && (
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Nouveau Contrat</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        <ConnectWallet />
        <EscrowContract />
      </div>
    </div>
  );
};

export default Contracts;