export const GetColorForMetascore = (metascore) => {
  switch (true) {
    case metascore >= 60:
      return 'green';
    case metascore >= 50:
      return 'yellow';
    default:
      return 'red';
  }
};
