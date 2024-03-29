import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>SafeChain</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <header className='text-white text-sm mt-[100px] flex flex-col items-center justify-center   '>
<div>
<div>
          <h3 className='text-center'>Your Passport to Future-Ready Healthcare</h3>
        </div>
        <div className='relative'>
          <h1 className='md:text-8xl text-center mt-[60px] z-5 text-5xl'>Introducing <br/>SafeChain. <br/><br/></h1>
          <p className="text-2xl mt-[30px] text-center ">

🚀 Brace yourself for the healthcare revolution! <br/> Safe Chain, riding the waves of the Internet Computer blockchain, <br/>is not just a platform—it's a paradigm shift in how we manage our most crucial asset—our health records. </p>
        </div>
        <div className='absolute right-0 top-[350px] overflow-hidden'>
        <Image src="/Thorus 3.png" width={350} height={350} alt="icon" className='overflow-hidden' ></Image>
        </div>
</div>
       
      
      </header>

  <div className='mt-[120px]'>
    <div className=''>
     
      <div className='flex justify-between flex-col md:flex-row'>
      <div className='relative'>
    
      </div> 

      </div>
    
    </div>
   
  </div>


  <div className='mt-[10px]'>
    <div className="flex flex-col items-center justify-center">
      <div className='relative px-4 md:px-0'>

      <div className='absolute md:top-[160px] md:left-[50px] md:w-[500px] w-[300px] top-[30px] flex flex-col items-center justify-center   md:px-0'>
      <h1 className='text-5xl  md:w-[500px] leading-[50px] mb-[40px] text-center'>🏛️ Immutable Record Keeping for Rock-Solid Trust:</h1>
      <p className='md:w-[500px] text-center text-sm ml-[50px] w-[350px]'>Say goodbye to the shadows of doubt! Safe Chain's blockchain backbone ensures your healthcare records are not just transparent but eternally unalterable. Trust is not earned; it's embedded in every record.</p>
     
      </div>
      

      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[130px] md:mt-[30px]'>
        


      </div>
    </div>
  </div>





  <div className='mt-[80px] '>
    <div className='flex justify-between flex-col md:flex-row'>
      <div className='md:ml-[200px]'>
        <div className='w-[600px] px-3'>
        <h2 className='md:text-4xl leading-[70px] text-4xl'>🌐 Cross-Border Compatibility: A World of Insurance Possibilities</h2>
        <div>
          <p className='mt-[40px] md:w-[400px] w-[300px]'>Safe Chain doesn't just comply with healthcare regulations globally; it seamlessly integrates with insurance protocols worldwide. Your insurance coverage becomes a global affair, matching the borderless nature of your health data.</p>
        </div>
        <div className='mt-[40px]'>
          <div>
            <h1 className='text-4xl'>Improved Patient Outcomes:</h1>
            <div className='mt-[20px]' />

            <p>
Transparent and accurate records enable healthcare providers to make more informed decisions, <br/>enhancing continuity of care with up-to-date information.</p>
          </div>
        </div>
        <div className='mt-[40px]' />

        </div>

      </div>
     
    </div>
  </div>


    <div className='mt-[100px] '>

      {/* <div className="flex justify-between flex-col md:flex-row">
        <div className='relative'>
        <Image src="/Sphere.png" width={350} height={750} alt="icon" className=' z-5' ></Image>
        <div className='absolute top-[50px] md:left-[140px] px-3'>
          <h1 className="text-5xl leading-[60px] mb-[40px]">Meet the worldwide community.</h1>
          <p>Join the fast-growing community of developers and innovators connected all over the world building the new era of the interest</p>
          <div className="mt-[50px] text-2xl font-bold flex gap-[15px]">
            Community {`>>>`}
         
          </div>
        </div>
        </div>
      

      <div className="md:mr-[200px] w-[350px] flex flex-col gap-[100px] px-3">
        <div>
          <h3 className="font-bold text-2xl mb-[15px]">Community Chat {`>>>`}</h3>
          <p className="text-sm">Ask general questions and chat with the worldwide community on telegram</p>
        </div>

        <div>
          <h3 className="font-bold text-2xl mb-[15px]">Twitter {`>>>`}</h3>
          <p className="text-sm">Ask general questions and chat with the worldwide community on telegram</p>
        </div>


        <div>
          <h3 className="font-bold text-2xl mb-[15px]">Developer Chat {`>>>`}</h3>
          <p className="text-sm">Ask general questions and chat with the worldwide community on telegram</p>
        </div>


        <div>
          <h3 className="font-bold text-2xl mb-[15px]">SafeChain forum {`>>>`}</h3>
          <p className="text-sm">Ask general questions and chat with the worldwide community on telegram</p>
        </div>



      </div>




      </div> */}





    </div>


<div className="mt-[150px] flex items-center justify-center">
  <div className="flex gap-[50px] flex-col md:flex-row">
    <div>
      <h1 className="font-bold text-2xl">Receive Transmissions</h1>
      <p>Unsubscribe at anytime. Privacy policy {`>>>`}</p>
    </div>
    <div>
      <input type="email" placeholder="your email" className='bg-[#141414] text-white p-2 py-3 w-[300px]'/>
    </div>
  </div>
</div>

<div className="mt-[100px]">
  <hr/>
</div>
    </>
  )
}
