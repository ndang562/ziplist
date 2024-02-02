function zipList(list1, list2) {
  const result = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }

  return result;
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

const result = zipList(list1, list2);
console.log(result);
