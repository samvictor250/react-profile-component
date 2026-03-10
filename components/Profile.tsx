import Image from 'next/image'

export default function Profile(){
  return(
    <div id='ProfileContainer' >
      <div id='Profile'>
        <img src="/Profile_Pic.png" 
        alt="Profile Pic" 
        width={150} 
        height={150}
        // Ajuste de Aspect Ratio e Crop para evitar distorção
        className='w-30 h-30 rounded-full object-cover border-2 border-zinc-200'
        />
        <h2 id='Nome' className='text-x1 font-bold mt-2'>
          Samuel Victor
        </h2>
      </div>

      <div id='Bio'>
      </div>
    </div>
  );
}