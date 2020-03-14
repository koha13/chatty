import React from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import GifElement from "./GifElement";

class SearchGif extends React.Component {
  state = {
    search: "trending",
    data: []
  };

  componentDidMount() {
    this.fetchData();
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.fetchData();
  };

  fetchData = () => {
    axios
      .post(
        "https://api.tenor.com/v1/search?key=43TZW7V8IHV3&limit=15&q=" +
          this.state.search
      )
      .then(res => {
        this.setState({ data: res.data.results });
      });
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="search-gif">
        <form style={{ marginBottom: "10px" }} onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Search gif"
            variant="outlined"
            fullWidth
            value={this.state.search}
            onChange={this.handleChange}
            type="search"
            style={{ color: "white" }}
          />
        </form>
        <div className="container">
          {this.state.data.map(gif => (
            <GifElement key={gif.id} gif={gif} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchGif;
