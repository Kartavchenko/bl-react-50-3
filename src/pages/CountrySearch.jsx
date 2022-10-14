import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';
import { useSearchParams } from 'react-router-dom';



export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const region = searchParams.get('region')
    if (!region) return;
    const getByRgion = async () => {
      const data = await fetchByRegion(region);
      console.log(
        // '🚀 ~ file: CountrySearch.jsx ~ line 18 ~ getByRgion ~ data',
        data,
      );
      setCountries(data);
    };
    getByRgion();
  }, [searchParams]);
  const onSubmit = region => {
       setSearchParams({region})
    // console.log("🚀 ~ file: CountrySearch.jsx ~ line 16 ~ onSubmit ~ query", query)
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit}></SearchForm>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
