import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Contracts from './pages/Contracts'

const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="p-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contracts" element={<Contracts />} />
              </Routes>
            </main>
          </div>
        </Router>
      </QueryClientProvider>
    </WagmiProvider>
  )
}