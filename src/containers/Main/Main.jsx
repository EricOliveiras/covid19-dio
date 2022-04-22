import React, { memo, useCallback, useState, useEffect } from 'react';
import getCountry from '../../api';
import Board from './Components/Board';
import Panel from './Components/Panel';
import { ContainerStyled } from './style';

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('brazil');
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((coutry) => {
    getCountry(coutry)
      .then(data => setData(data))
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  return (
    <ContainerStyled>
      <div className='mb-2'>]
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCoviddata={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
};

export default memo(Main);