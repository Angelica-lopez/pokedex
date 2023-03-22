import React from 'react';
import { MdOutlineCatchingPokemon } from "react-icons/md";
import InputSearch from "../InputSearch";

function Header() {
  return (
   <div>
    <div className='flex items-center justify-start gap-x-3 pb-2'>
      <MdOutlineCatchingPokemon size={43} color="#fff" />
      <h1 className='uppercase font-bold text-[39px] text-white'>Pokedex</h1>
    </div>
    <InputSearch />
   </div>
  )
}

export default Header
