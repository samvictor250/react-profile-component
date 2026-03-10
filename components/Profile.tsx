import Image from 'next/image'

export default function Profile(){
  return(
    <div id='ProfileContainer'>

      <div id='Profile' className='flex flex-col items-center'>
        <Image src="/Profile_Pic.png" 
        alt="Profile Pic" 
        width={150} 
        height={150}
        // Ajuste de Aspect Ratio e Crop para evitar distorção
        className='w-[150px] h-[150px] rounded-full object-cover border-2 border-zinc-200'
        />
      
        <h2 id='Nome' className='text-xl font-bold mt-4'>
          Samuel Victor
        </h2>
      </div>

      <div id='Bio' className='mt-2 text-center'>
        <p className="text-zinc-600 dark:text-zinc-400">
          Estudante da UNICAP, com foco em otimização e eficiência de sistemas 
          junto a logica e algoritimos.
          Construindo o caminho para a Engenharia de Software e DevOps.
        </p>
      </div>

    </div>
  );
}