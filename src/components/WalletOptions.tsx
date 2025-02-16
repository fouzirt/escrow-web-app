import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect Your Wallet</h2>
      <div className="space-y-4 w-full max-w-xs">
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
          >
            {connector.name}
          </button>
        ))}
      </div>
    </div>
  )
}