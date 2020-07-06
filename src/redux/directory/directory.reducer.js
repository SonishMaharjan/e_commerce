const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
