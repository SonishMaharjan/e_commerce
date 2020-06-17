import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "JACKETS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "TROUSERS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "SHORTS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "SARI",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...othersSectionProps }) => (
          <MenuItem key={id} {...othersSectionProps}></MenuItem>
        ))}
      </div>
    );
  }
}

export default Directory;
