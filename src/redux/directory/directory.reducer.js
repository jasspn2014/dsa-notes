const INITIAL_STATE = {
  sections: [
    {
      title: "array",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "problems/array",
    },
    {
      title: "linked-list",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "problems/linked-list",
    },
    {
      title: "stack",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "problems/stack",
    },
    {
      title: "queue",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      linkUrl: "problems/queue",
    },
    {
      title: "tree",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "problems/tree",
    },
    {
      title: "graph",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "problems/graph",
    },
    {
      title: "divide-and-conquer",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "problems/divide-and-conquer",
    },
    {
      title: "backtracking",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "problems/backtracking",
    },
    {
      title: "greedy-algorithms",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "problems/greedy-algorithms",
    },
    {
      title: "dynamic-programming",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      id: 5,
      linkUrl: "problems/dynamic-programming",
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
