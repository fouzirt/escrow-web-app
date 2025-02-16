import { useAccount, useDisconnect, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
          <span className="text-indigo-600 font-semibold">
            {address ? address.slice(2, 4).toUpperCase() : '??'}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">
            {ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Not connected')}
          </p>
          <p className="text-xs text-gray-500">Connected Wallet</p>
        </div>
      </div>
      <button
        onClick={() => disconnect()}
        className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        Disconnect
      </button>
    </div>
  )
}