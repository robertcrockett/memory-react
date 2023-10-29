export const utils = {
  // Create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // Fisher-Yates Shuffle
  shuffle: (array) => {
    let i = array.length,
      temp;

    while (i--) {
      // Obtain a randomly chosen element
      temp = Math.floor(Math.random() * (i + 1));

      // Swap randomly chosen element using deconstrution
      [array[temp], array[i]] = [array[i], array[temp]];
    }

    // Return the shuffled elements of the array
    return array;
  },
};
