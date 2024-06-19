import Link from 'next/link'
import Image from 'next/image'
import WebtoonSlider from '../webtoonslider/WebtoonSlider';
import {
  MediaRenderer,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
  ConnectWallet,
  useOwnedNFTs,
  useNFTs,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import {WEBTOON_ADDRESS} from "../../../constants/addresses";

import { BigNumber, ethers } from "ethers";
import Spinner from '../../layouts/Spinner';
const myNftDropContractAddress = "0x05746530dBc6b680b9cfD3933A4f827e0960688F";
import React from "react";
import { useState } from "react";


const Webtoon = () => {


const { contract: webtooncontract } = useContract(WEBTOON_ADDRESS);
const { contract: nftDrop } = useContract(myNftDropContractAddress);
const address = useAddress();
const [quantity, setQuantity] = useState(1);
const { data: contractMetadata } = useContractMetadata(nftDrop);
const claimConditions = useClaimConditions(nftDrop);


  const { data: ownedWebtoons, isLoading: loadingOwnedWebtoons } = useOwnedNFTs(webtooncontract, address);
 

  
  if (!address) {

    return (
      <div className="container-lg py-32 ">
        <div className="flex-col h-full mx-auto my-auto justify-center">
          <h1 className='text-3xl text-yellow-100 pt-16 text-center font-Metamorphous'>WELCOME TO IMMORTAL COIL WEBTOONS</h1>
          <p className='text-xl text-white pt-4 text-center font-Jost'>To read the Immortal Coil Webtoon, connect your wallet and mint a Webtoon Episode 1 NFT.</p>
          <div className="m-auto w-96 py-8">
            <Image
            className="m-auto py-12 mask mask-hexagon"
            src="/assets/webtoon_placeholder.jpg"
            alt="Webtoon Episode 1"
            width={1000}
            height={1000}
          />
            </div>
      
          <div className='w-60 flex items-center justify-center m-auto pb-12'>
          <ConnectWallet /></div>
        </div>
      </div>
    );
  }

  if (loadingOwnedWebtoons) {


    return(

      <div className="container-lg flex justify-center mx-auto mt-96 ">
       
          <Spinner />
      
      </div>
    );
  }

  if (ownedWebtoons?.length === 0) {
    
    return (
      
<div className="w-full justify-center mx-auto pt-8">

<p className="text-white text-md font-Jost text-center py-4">You currently do not own Immortal Coil Webtoon Episode 1. Mint the first epsiode of the Webtoon below to read it.</p>


<div className="flex justify-center m-auto ">

<div className='grid grid-cols-2 gap-12'>

<div className="bg-black rounded-3xl w-96 drop-shadow-3xl border mt-8 p-8 ">


<Image
          className=" pb-6  w-96 rounded-2xl " 
          src="/assets/webtoon_ep01.jpg"
          alt="Webtoon EP01"
          width={1500}
          height={1060}
        />

<h1 className="text-yellow-100  text-lg font-Jost mb-2 text-center">Cost: 500 BLOOD</h1>
<h1 className="text-white  text-sm font-Jost mb-8 text-center">You can claim max. 3 NFTs per wallet</h1>






<div className='w-60 flex items-center justify-center m-auto pb-4'>

<Web3Button 
          
          
          contractAddress={nftDrop?.getAddress() || ""}
          action={(cntr) => cntr.erc721.claim(quantity)}
       
          onError={(err) => {
            console.error(err);
            alert("Error claiming NFTs");
          }}
          onSuccess={() => {
            setQuantity(1);
            alert("Successfully claimed NFTs");
          }}
        >
        
          Claim NFT
        </Web3Button></div>

       

        </div>

        <div className="bg-black/30 rounded-3xl w-96 drop-shadow-3xl mt-8 pt-10 px-12 ">
<h1 className='text-yellow-200 font-Metamorphous font-lg mb-8'>SKY GODZ TALES WEBTOONS</h1>

<p className='text-yellow-200 font-base mb-8'>The town of Moorholm is being haunted by vampires fighting for supremacy of the dark realm of Therondia, none more powerful than the immortal vampire Kai. </p>
<p className='text-white font-base mb-8'>Mint the cover of the first of the Webtoon with Blood tokens and get instant access to the first episode. </p>
<p className='text-white font-base mb-8'>Collect, own or trade your copy. </p>
<p className='text-white font-base mb-8'>After your mint has been confirmed, you will be automatically redirected to the Webtoon page or click the button below. </p>
<div className=" flex items-center justify-center py-4">
            <Link href="/webtoon">
            <button className="bg-red-900 hover:bg-black text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Read Webtoon
</button></Link></div>

</div>



        </div>

      
        
        </div>

        <div className="justify-center m-auto flex max-w-3xl py-2">
          
          <h1 className=' text-white text-xl font-Jost pt-8 pb-4 text-center'>SKY GODZ WEBTOON Episode 1 Preview... </h1>
        
        </div>

        <div className="justify-center m-auto flex max-w-3xl pb-4">

  

<div className="grid grid-cols-3 gap-4">

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/webtoon_preview01.jpg"
          alt="Preview 1"
          width={640}
          height={480}
        />
 </div>

  <div>
  <Image
          className="m-auto rounded-xl "
          src="/assets/webtoon_preview02.jpg"
          alt="Preview 2"
          width={640}
          height={480}
        />
 </div>


<div>

<Image
          className="m-auto rounded-xl "
          src="/assets/webtoon_preview03.jpg"
          alt="Preview 3"
          width={640}
          height={480}
        />
</div>
</div>
</div>
<div className="justify-center m-auto flex max-w-3xl py-2">
          
          <h1 className=' text-white text-lg font-Jost mb-12 text-center'>Stay tuned for upcoming episodes of the IMMORTAL COIL Webtoon... </h1>
        
        </div>




        </div>
         









    );
  }

















  //Main Container with Webtoons

    return (
      
      <div className="justify-center pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-10">
      <div className=" grid max-w-screen-lg row-gap-5 sm:text-center sm:mx-auto">
        

      

          <h2 className="m-auto mb-4 text-3xl tracking-wide text-yellow-100 sm:text-4xl sm:leading-none sm:m-auto font-Metamorphous py-5">
          IMMORTAL COIL WEBTOONS
          </h2>
          <hr className="w-4/6 mx-auto my-4 border-yellow-200" />
          <p className="text-base text-white lg:text-lg  md:text-lg sm:px-4 py-2 font-Jost">
          The town of Moorholm is being haunted by vampires fighting for supremacy of the dark realm of Therondia, none more powerful than the immortal vampire Kai. 
          </p>
          </div>
          

<div className='py-8'>
<WebtoonSlider />
</div>


<div className='w-full py-8'>
<p className="text-center text-base text-yellow-100 lg:text-xl  md:text-lg sm:px-4 py-2 font-Jost">Check out upcoming episodes of the IMMORTAL COIL webtoon. 
          </p>
</div>

<div className='m-auto justify-center'>
<div className="grid grid-cols-3 gap-8 ">

  <div className='bg-red-950/50 rounded-2xl py-8 px-8'>

  <div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto border border-black rounded-2xl"
          src="/assets/thumb_ep02.jpg"
          alt="Episode 2"
          width={640}
          height={480}
        />
    </div>
    <h1 className='text-yellow-100 font-Jost text-lg text-left pb-4'>EPISODE 2: Baptised by Blood</h1>
    <p className='text-white text-left font-Jost '> Kai gets initiated into the coven at Frosthaven and becomes the most powerfull vampire in Therondia. </p>
 

    <div className=" flex items-center justify-center pt-4">
            
            <button className="bg-black hover:bg-red-700 text-yellow-200  w-40 h-12  px-4 rounded mt-1">
  Coming soon
</button></div>

</div>

 <div className='bg-red-950/50 rounded-2xl py-8 px-8'>

 <div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto border border-black rounded-2xl"
          src="/assets/thumb_ep03.jpg"
          alt="Episode 3"
          width={640}
          height={480}
        />
    </div>
    <h1 className='text-yellow-100 font-Jost text-lg text-left pb-4 tracking-tighter'>EPISODE 3: Sword of Skjallgrim</h1>
    <p className='text-white text-left font-Jost '> With the help from an old female Vampire called Iona, Kai retrieves the powerful Skjallgrim sword from the lake of tears. </p>
 

    <div className=" flex items-center justify-center pt-4">
            
            <button className="bg-black hover:bg-red-700 text-yellow-200  w-40 h-12  px-4 rounded mt-1">
            Coming soon
</button></div>

 </div>

<div className='bg-red-950/50 rounded-2xl py-8 px-8'>

<div className="m-auto pb-4 w-full ">
          <Image
          className="m-auto border border-black rounded-2xl "
          src="/assets/thumb_ep04.jpg"
          alt="Episode 4"
          width={640}
          height={480}
        />
    </div>
    <h1 className='text-yellow-100 font-Jost text-lg text-left pb-4'>EPISODE 4: Raising Hell</h1>
    <p className='text-white text-left font-Jost '> In possession of a weapon powerful enough to defeat Necrocorvo, they head through the Rabenwald and the pits of hell.</p>
 

    <div className=" flex items-center justify-center pt-4">
            
            <button className="bg-black hover:bg-red-700 text-yellow-200  w-40 h-12  px-4 rounded mt-1">
            Coming soon
</button></div>

</div>
</div>

</div>



      </div>









    );
  };

  export default Webtoon;