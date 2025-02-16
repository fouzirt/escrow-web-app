interface EscrowInfoProps {
    escrowStatus: bigint | undefined;
    goodsShipped: boolean | undefined;
    fundsReleased: boolean | undefined;
}

const statusMessages = {
    0: "At Buyer",
    1: "In Transit to Departure Port",
    2: "In Customs",
    3: "Pre-Loading",
    4: "Loaded"
};

export function EscrowInfo({ escrowStatus, goodsShipped, fundsReleased }: EscrowInfoProps) {
    const getStatusMessage = (status: bigint | undefined) => {
        if (status === undefined) return "Unknown";
        return statusMessages[Number(status) as keyof typeof statusMessages] || "Invalid Status";
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contract Status</h2>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Current Status:</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                        {getStatusMessage(escrowStatus)}
                    </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Goods Shipped:</span>
                    <span className={`px-3 py-1 rounded-full ${
                        goodsShipped 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                    }`}>
                        {goodsShipped ? "✅ Shipped" : "❌ Not Shipped"}
                    </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Funds Released:</span>
                    <span className={`px-3 py-1 rounded-full ${
                        fundsReleased 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                    }`}>
                        {fundsReleased ? "✅ Released" : "❌ Pending"}
                    </span>
                </div>
            </div>
        </div>
    );
}