"use client";
import { useState } from "react";

interface SearchProps {
  onSearch: (value: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-8 items-center w-3/4 max-sm:w-full max-sm:flex-col"
    >
      <input
        type="text"
        placeholder="@username"
        className="bg-transparent border rounded-xl border-secondary w-4/5 max-sm:w-full h-8 px-5 focus-visible:outline-none"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-primary border rounded-xl border-secondary h-8 px-5 self flex items-center justify-center w-1/5 max-sm:w-full"
      >
        Buscar
      </button>
    </form>
  );
}
