import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';


export const Home = () => {
  const [countries, setCoutries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries() 
      console.log(data);
      setCoutries(data)
 }
fetchCountries()
  }, [])
  return (
    <Section>
      <Container>
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
