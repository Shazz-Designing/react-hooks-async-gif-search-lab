import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    // Fetch default gifs when the component mounts
    this.fetchGifs();
  }

  fetchGifs = (query = "YOUR_DEFAULT_QUERY") => {
    // Fetch data from Giphy API and update state
    
    const apiKey = "TM1qDm7Fi8tRgS4ZE5rQGyKJE8VjLgPV";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
