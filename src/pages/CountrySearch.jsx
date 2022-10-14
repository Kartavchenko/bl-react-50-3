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

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!query) return;
    const getByRgion = async () => {
      const data = await fetchByRegion(query);
      console.log(
        // '🚀 ~ file: CountrySearch.jsx ~ line 18 ~ getByRgion ~ data',
        data,
      );
      setCountries(data);
    };
    getByRgion();
  }, [query]);
  const onSubmit = region => {
    setQuery(region);
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
