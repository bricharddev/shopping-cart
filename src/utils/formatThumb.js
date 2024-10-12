const formatThumb = (thumb) => {
  const formated = thumb.replace(/\w\.jpg/gi, "W.jpg");

  return formated;
};

export default formatThumb;
