export const getQueryParam = (name: string) => {
  let regex = new RegExp(`${name}=([^&]*)`);
  let match = window.location.search.match(regex);

  return match && match.length > 1 ? match[1] : null;
};
