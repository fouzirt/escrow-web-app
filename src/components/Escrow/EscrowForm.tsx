import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { EscrowConfig } from "./EscrowConfig";
import { useEffect } from "react";

interface EscrowFormProps {
    refetchEscrowDetails: () => void;
}

export function EscrowForm({ refetchEscrowDetails }: EscrowFormProps) {
    useAccount();
    const { data: hash, isPending, writeContract } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

    async function updateStatus(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const newStatusStr = formData.get("status");
        const newStatusNum = Number(newStatusStr);
    
        if (!newStatusStr || isNaN(newStatusNum) || newStatusNum < 0 || newStatusNum > 4) {
            alert("Invalid status. Please enter a number between 0 and 4.");
            return;
        }

        console.log(newStatusNum);
        
    
        writeContract({
            address: EscrowConfig.address,
            abi: EscrowConfig.abi,
            functionName: "updateStatus",
            args: [BigInt(newStatusNum)],
        });
    }
    

    async function confirmShipment() {
        writeContract({
            address: EscrowConfig.address,
            abi: EscrowConfig.abi,
            functionName: "confirmShipment",
            args: [],
        });
    }

    async function releasePayment() {
        writeContract({
            address: EscrowConfig.address,
            abi: EscrowConfig.abi,
            functionName: "releasePayment",
            args: [],
        });
    }

    useEffect(() => {
        if (isConfirmed) {
            refetchEscrowDetails();
        }
    }, [isConfirmed, refetchEscrowDetails]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Escrow Controls</h2>
            
            <form onSubmit={updateStatus} className="space-y-4">
                <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                        Update Status
                    </label>
                    <div className="mt-1 flex space-x-3">
                        <input
                            id="status"
                            name="status"
                            type="number"
                            min="0"
                            max="4"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter new status (0-4)"
                        />
                        <button
                            type="submit"
                            disabled={isPending}
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                        >
                            {isPending ? "Updating..." : "Update Status"}
                        </button>
                    </div>
                </div>
            </form>

            <div className="flex space-x-4">
                <button
                    onClick={confirmShipment}
                    disabled={isPending}
                    className="flex-1 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    Confirm Shipment
                </button>
                <button
                    onClick={releasePayment}
                    disabled={isPending}
                    className="flex-1 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    Release Payment
                </button>
            </div>

            {hash && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">
                        Transaction Hash: <span className="font-mono">{hash}</span>
                    </p>
                </div>
            )}
            {isConfirming && (
                <div className="mt-2 text-sm text-indigo-600">
                    Waiting for confirmation...
                </div>
            )}
            {isConfirmed && (
                <div className="mt-2 text-sm text-green-600">
                    Transaction confirmed successfully!
                </div>
            )}
        </div>
    );
}