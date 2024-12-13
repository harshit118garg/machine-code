export const fillGrid = (content: string[]) => {
  if (content.length % 2 !== 0) {
    return;
  }

  const gridSize = Math.sqrt(content.length);

  let arr = [];

  for (let i = 0; i < content.length; i += gridSize) {
    arr.push(content.slice(i, i + gridSize));
  }

  return arr;
};

export const shuffleArray = (arr: string[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
