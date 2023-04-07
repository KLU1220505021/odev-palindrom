interface linkedListItem {
  val: number;
  next?: linkedListItem;
}

function linkedListArray(head: linkedListItem) {
  const array: any[] = [];
  while (head) {
    array.push(head.val);
    //@ts-ignore
    head = head.next;
  }
  return array;
}

function isPalindrome(head: linkedListItem) {
  const array = linkedListArray(head);

  for (let left = 0, right = array.length - 1; left <= right; left++, right--) {
    if (array[left] !== array[right]) {
      return false;
    }
  }
  return true;
}

let item1: linkedListItem = {
  val: 1,
};

let item2: linkedListItem = {
  val: 2,
  next: item1,
};

let item3: linkedListItem = {
  val: 2,
  next: item2,
};

let item4: linkedListItem = {
  val: 1,
  next: item3,
};

console.log(isPalindrome(item4));
