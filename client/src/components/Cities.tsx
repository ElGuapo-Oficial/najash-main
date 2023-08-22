import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_CITIES = gql`
  query {
    cities {
      commonName
      officialName
    }
  }
`;

const Cities: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data?.cities.map((city: { commonName: string; officialName: string }) => (
        <div key={city.commonName} style={{backgroundColor: "red"}}>
          <h3>{city.commonName}</h3>
          <p>{city.officialName}</p>
        </div>
      ))}
    </div>
  );
};

export default Cities;
