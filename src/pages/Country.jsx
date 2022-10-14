import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState([]);
  const { countryId } = useParams();

  const location = useLocation()
  useEffect(() => {
    const fetchCountryInfo = async () => {
      const data = await fetchCountry(countryId);
      setCountry(data);
      //console.log(data);
    };
    fetchCountryInfo();
  }, [countryId]);

  if (!country) {
    return;
  }

  return (
    
    <Section>
      <Container>
        <Link to={location?.state?.from || '/'}>GO BACK</Link>
        <CountryInfo countryInfo={country} />
      </Container>
    </Section>
  );
};
