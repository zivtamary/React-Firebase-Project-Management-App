const initialState = {
  projects: [
    {
      id: "1",
      title: "First title",
      content: "blablabla....",
    },
    {
      id: "2",
      title: "Second title",
      content: "blablabla....",
    },
    {
      id: "3",
      title: "Third title",
      content: "blablabla....",
    },
  ],
  isLoading: false,
};

const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CREATE_PROJECT_LOAD":
      return {
        ...state,
        isLoading:true
      }
    case "CREATE_PROJECT_SUCCESS":
      return {
        ...state,
        projects: [...state.projects, payload],
        isLoading: false
      };
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", payload);
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default projectReducer;
