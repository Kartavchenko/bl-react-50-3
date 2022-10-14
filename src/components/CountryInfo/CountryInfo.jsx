import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({ countryInfo }) => {
  const {
    flag,
    capital,
    countryName,
    languages = [],
    population,
  } = countryInfo;

  return (
    <CountryWrapper>
      <Flag>
        <Image src={flag} alt={countryName} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};
