"use client";
import React, { useState } from "react";
import Search from "../components/Search/search";
import Profile from "../components/Profile/profile";
import { IProfile, IProfileRepository, IRepository } from "@/types/IProfileRepository";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentUser, setCurrentUser] = useState<IProfile | undefined>(undefined);
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [profileData, setProfileData] = useState<IProfileRepository | undefined>(undefined);

  const handleGetData = async (value: string) => {
    const userData = await fetch(`https://api.github.com/users/${value}`);
    const newUser = await userData.json();
    
    if(newUser.name){
      const {avatar_url, name, login} = newUser;
      setCurrentUser({avatar_url, name, login});

      const reposData = await fetch(`https://api.github.com/users/${value}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        const formattedRepos = newRepos.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
        }));
        setRepositories(formattedRepos);

        const profileData : IProfileRepository = {
          profile: { name, login, avatar_url },
          repositories: formattedRepos
        }

        setProfileData(profileData);
      }
    }
  };

  const handleSearch = async (value: string) => {
    setSearchValue(value);
    await handleGetData(value);
  };

  return (
    <main className="relative flex items-start justify-end w-full h-full overflow-auto">
      <img
        src="/images/background.png"
        alt="GitHub Logo"
        className="absolute left-0 h-full"
      />
      <div className="w-full h-full flex flex-col items-center gap-16 p-10">
        <Search onSearch={handleSearch} />
        {
          profileData ? (
            <Profile data={profileData} />
          ) : (
            <div>Digite um nome de usuário para visualizar seu perfil...</div>
          )
        }
        
      </div>
    </main>
  );
};
