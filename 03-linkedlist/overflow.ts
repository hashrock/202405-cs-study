var i = 0;

function recurse() {
  i++;
  console.log(i);
  recurse();
}

recurse();
