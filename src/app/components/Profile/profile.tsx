import { IProfileRepository } from '@/types/IProfileRepository'
import React from 'react'

interface ProfileProps {
    data: IProfileRepository;
  }
  
  export default function Profile({ data }: ProfileProps) {
    const { profile, repositories } = data;

  return (
    <div className='flex flex-col gap-10 w-3/4 max-sm:w-full'>
        <section className='flex gap-8 items-center'>
            <img src={profile.avatar_url} alt="" className='h-24 border-2 border-white rounded-[50px] max-sm:h-20'/>
            <div className='flex flex-col items-start text-secondary'>
                <h3 className='text-xl'>{profile.name}</h3>
                <p>{profile.login}</p>
            </div>
        </section>
        <hr className='h-1 border-0 bg-secondary rounded-xl'/>
        <section className='flex flex-col gap-8'>
            <h2 className='text-2xl font-bold self-center'>Repositórios</h2>
            <div className='flex flex-col gap-8'>
                {repositories.map((repository, index) => (
                    <div key={index}>
                        <h4 className='text-[#539BF5] text-lg font-semibold'>{repository.name}</h4>
                        <p className='text-secondary'>{repository.description}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
//adicionar link a foto de perfil