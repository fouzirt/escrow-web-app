import { useAccount, useReadContract } from "wagmi";
import { EscrowForm } from "./EscrowForm";
import { EscrowConfig } from "./EscrowConfig";
import { EscrowInfo } from "./EscrowInfo";

export function EscrowContract() {
    const { isConnected } = useAccount();

    const { data: escrowStatusRaw, refetch: refetchStatus } = useReadContract({
        address: EscrowConfig.address,
        abi: EscrowConfig.abi,
        functionName: "status",
        args: [],
    });

    const escrowStatus = typeof escrowStatusRaw === "number" 
        ? BigInt(escrowStatusRaw) 
        : escrowStatusRaw;

    const { data: goodsShipped, refetch: refetchGoodsShipped } = useReadContract({
        address: EscrowConfig.address,
        abi: EscrowConfig.abi,
        functionName: "goodsShipped",
        args: [],
    });

    const { data: fundsReleased, refetch: refetchFundsReleased } = useReadContract({
        address: EscrowConfig.address,
        abi: EscrowConfig.abi,
        functionName: "fundsReleased",
        args: [],
    });

    const refetchEscrowDetails = () => {
        refetchStatus();
        refetchGoodsShipped();
        refetchFundsReleased();
    };

    refetchEscrowDetails()
    console.log(fundsReleased, escrowStatus, goodsShipped);
    
    console.log("Contract Address:", EscrowConfig.address);
    console.log("Contract ABI:", EscrowConfig.abi);



    return (
        <>
            {isConnected && (
                <div className="max-w-4xl mx-auto space-y-8">
                    <EscrowForm refetchEscrowDetails={refetchEscrowDetails} />
                    <EscrowInfo 
                        escrowStatus={escrowStatus} 
                        goodsShipped={goodsShipped} 
                        fundsReleased={fundsReleased} 
                    />
                </div>
            )}
        </>
    );
}