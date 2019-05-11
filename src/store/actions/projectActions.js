export const createProject = (project, history) => (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  dispatch({ type: "CREATE_PROJECT_LOAD" });

  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorId = getState().firebase.auth.uid;
  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date(),
    })
    .then(p => {
      dispatch({
        type: "CREATE_PROJECT_SUCCESS",
        payload: { id: p.id, ...project },
      });
      history.push("/");
    })
    .catch(err => {
      dispatch({ type: "CREATE_PROJECT_ERROR", payload: err });
    });
};
