import React, { useState } from 'react';
import { HomeContainer } from '../Styled/HomeStyle/HomeStyled';
import InputSection from '../components/Home/inputSection';
import Rutin from '../components/Home/rutin';
import OnlyToday from '../components/Home/OnlyToday';
import Calender from '../components/Home/Calender'
import Approach from '../components/Home/Approach';
import Navigation from '../components/Navigation/Navigation';
import SideBar from '../components/Home/SideBar';

function Home() {
  return (
    <HomeContainer>
      <SideBar />
      <Navigation />
      <InputSection />
      <Rutin />
      <OnlyToday />
      <Calender />
      <Approach />
    </HomeContainer>
  );
}

export default Home;
