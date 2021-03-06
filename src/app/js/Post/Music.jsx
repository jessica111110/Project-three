import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class Music extends Component {
  constructor(props) {
    super(props);

    // console.log("songurl", this.props.url.preview_url)

    this.state = { play: true };
    this.audio = new Audio(this.props.url.preview_url);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    // console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
  }

  render() {
    return (
      <div>
        {this.props.url.preview_url != null && (
          <img
            className="music-feature"
            onClick={this.togglePlay}
            src={
              this.state.play
                ? require("../../assets/play-button.png")
                : require("../../assets/rounded-pause-button.png")
            }
          />
        )}
      </div>
    );
  }
}

export default Music;
