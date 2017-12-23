export const boxShadow = (value) => {
  return {
    WebkitBoxShadow: value,
    MozBoxShadow: value,
    boxShadow: value,
  };
};

export default {
  boxShadow,
};
