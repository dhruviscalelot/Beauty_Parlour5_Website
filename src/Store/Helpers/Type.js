// Helper to create LOADING / SUCCESS / ERROR action types
const createActionTypes = (base) => ({
  LOADING: `${base}_LOADING`,
  SUCCESS: `${base}_SUCCESS`,
  ERROR: `${base}_ERROR`,
});

// Helper to generate action type groups for a feature
const createFeatureActions = (featureName, actions) => {
  return actions.reduce((acc, action) => {
    acc[action] = createActionTypes(`${action}_${featureName}`);
    return acc;
  }, {});
};

// Define actions for each module
export const AUTH = createFeatureActions("AUTH", [
  "LOGIN",
]);

export const GENERAL = createFeatureActions("GENERAL", [
  "SUBMIT_INQUIRY",
  "GET_HOME_DATA",
]);
