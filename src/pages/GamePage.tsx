
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import GameSection from '../components/GameSection';

const GamePage = () => {
  useEffect(() => {
    document.title = "Nanotech Warrior | Game";
  }, []);

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <GameSection />
      </div>
    </Layout>
  );
};

export default GamePage;
