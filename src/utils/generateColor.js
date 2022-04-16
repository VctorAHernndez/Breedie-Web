const generateColor = () => {
  let result = '#';

  for (let i = 0; i < 3; i++) {
    result += parseInt(Math.random() * 255).toString(16);
  }

  while (result.length < 7) {
    result += '0';
  }

  return result;
};

export default generateColor;
