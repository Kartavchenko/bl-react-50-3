import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({onSubmit}) => {
const [countryName, setCountryName] = useState("");

const onChange = (e)=>{
setCountryName(e.target.value)
console.log("countryName", countryName);
}

const heandelSubmit=(e)=>{
  e.preventDefault();
  onSubmit(countryName)

}
  return (
    <SearchFormStyled onSubmit={heandelSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={onChange} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled >
          Select a region and press enter
        </option>
        <option  value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
