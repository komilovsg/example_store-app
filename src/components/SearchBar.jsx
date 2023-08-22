import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {

  ///////
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleInputChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(selectedValue); // Демонстрация выбранного значения в консоли
    };
//////
  return (
   <div className='container mx-auto flex justify-center pb-10 bg-slate-100'>
           <div class="flex md:w-[95%] flex-col md:flex-row justify-center bg-white py-5 px-10 border rounded-md shadow-xl items-center gap-2">
    <form onSubmit={handleSubmit} className='relative border w-[200px] rounded-md px-7 py-1.5 hover:bg-gray-200 flex flex-col justify-start'>
      <label htmlFor="location">Location</label>
      <select value={selectedValue} onChange={handleInputChange} className=''>
        <option value="usa">USA</option>
        <option value="russia">Russia</option>
        <option value="tajikistan">Tajikistan</option>
      </select>
    </form>
    <form className='relative w-[200px] flex flex-col justify-start border rounded-md px-2 py-1'>
    <label for="start">Date:</label>
<input type="date" 
id="start" 
name="trip-start"/>
    </form>
    <form onSubmit={handleSubmit} className='relative w-[200px] border rounded-md px-7 py-1.5 hover:bg-gray-200 flex flex-col justify-start'>
      <label htmlFor="year">Year</label>
      <select value={selectedValue} onChange={handleInputChange}>
        <option value="793AD">793AD</option>
        <option value="794AD">794AD</option>
        <option value="795AD">795AD</option>
      </select>
    </form>
    <form onSubmit={handleSubmit} className='relative w-[200px] border rounded-md px-7 py-1.5 hover:bg-gray-200 flex flex-col justify-start'>
      <label htmlFor="year">Type</label>
      <select value={selectedValue} onChange={handleInputChange}>
        <option value="Weapons">Weapons</option>
        <option value="Shirt">Shirt</option>
        <option value="Pants">Pants</option>
      </select>
    </form>
    <button className='flex w-[200px] justify-center items-center border px-5 py-4 rounded-lg bg-amber-500 shadow-md active:scale-95 transition-all'>
      <AiOutlineSearch/>  
        Search</button>
    </div>
      </div>
  );
}

export default SearchBar;