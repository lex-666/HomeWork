function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Both parameters must be numbers'); 
    }
  if (width <= 0) {
        throw new Error("Width must be greater than zero");
    }
  if (height <= 0) {
        throw new Error("Height must be greater than zero");
    }

  return width * height;
}

try {    
    const area = calcRectangleArea(0, 2);
    alert(`The area of the rectangle is ${area}`);
} catch (error) {
    alert(`Error: ${error.message}`);
}