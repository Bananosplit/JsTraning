
let x = 4;

let valueFunc = (x) => {
  let f;
    if (x <= 1){
      return f = -1;
    } else {
        f =  valueFunc(x-1);
      return f;
    };
};
alert("Value function = " + valueFunc(x));
