import React from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class SearchGif extends React.Component {
  state = {
    search: "",
    data: []
  };

  fetchData = e => {
    e.preventDefault();

    axios
      .post(
        "https://api.tenor.com/v1/search?key=43TZW7V8IHV3&limit=15&q=" +
          this.state.search
      )
      .then(res => {
        this.setState({ data: res.data.results });
        console.log(res.data.results);
      });
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="search-gif">
        <form style={{ marginBottom: "10px" }} onSubmit={this.fetchData}>
          <TextField
            id="outlined-basic"
            label="Search gif"
            variant="outlined"
            fullWidth
            value={this.state.search}
            onChange={this.handleChange}
            type="search"
          />
        </form>
        <div className="container">
          {this.state.data.map(gif => (
            <div key={gif.id}>
              <img src={gif.media[0].tinygif.url} alt={gif.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchGif;
