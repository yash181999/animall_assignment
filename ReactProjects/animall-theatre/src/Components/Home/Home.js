import React from "react";
import Header from "../Header/Header";
import Banner from  "../Banner/Banner"
import Row from "../Row/Row";
import requests from "../../requests";


function Home() {
  return (
    <div>
      
      <Banner></Banner>
      <Row isLargeRow title="Discover" fetchUrl={requests.fetchDiscover}></Row>
      <Row
        isLargeRow
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
      ></Row>
      <Row
        isLargeRow
        title="Documentries"
        fetchUrl={requests.fetchDocumentaries}
      ></Row>
      <Row
        isLargeRow
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      ></Row>
      <Row
        isLargeRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      ></Row>
    </div>
  );
}

export default Home;
