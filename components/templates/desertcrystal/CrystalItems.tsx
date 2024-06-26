
import { 
    
    MediaRenderer, 
    Web3Button, 
    useActiveClaimCondition, 
    useContract } from "@thirdweb-dev/react";

import { NFT } from "@thirdweb-dev/sdk";
import { CRYSTAL_ADDRESS } from "../../../constants/addresses";
import { ethers } from "ethers";
import styles from '/styles/Home.module.css'

type Props = {
    nft: NFT;
};

function CrystalItems({ nft }: Props) {
    const { contract } = useContract(CRYSTAL_ADDRESS);
    const { data, isLoading } = useActiveClaimCondition(
        contract,
        nft.metadata.id, // Token ID required for ERC1155 contracts here.
      );

    return (

        <div key={nft.metadata.id} className=' mx-auto justify-items-center py-12 '>
            <div className="">
            <MediaRenderer className="rounded-3xl shadow-lg"
                src={nft.metadata.image}
                height="300px"
                width="300px"
                
                
                
        
            /></div>
            <div className=" text-yellow-100 text-2xl text-bold  text-center  pt-4 ">{nft.metadata.name}</div>
            {!isLoading && data ? (
                <div className="text-white text-center pt-2">Cost: {ethers.utils.formatEther(data?.price)}{" " + data?.currencyMetadata.symbol}</div>
                
            ) :(
                <div className='text-xl text-white text-center'>Loading...</div>
            )}

<div className='pb-4 flex items-center justify-center m-auto'>
            <Web3Button 
              className={styles.claimButton}
              onSuccess={() => alert("Claimed!")}
                contractAddress={CRYSTAL_ADDRESS}
                action={(contract) => contract.erc1155.claim(nft.metadata.id, 1)}
            >Buy</Web3Button>

            
</div>
<div className="text-blue-200 text-center text-sm font-Proza">1 Crystal NFT per wallet</div>
        </div>
    )
};

export default CrystalItems;