const pyramid = (char, rows, isDown) => {
  let output = "";
  const start = !isDown ? 1 : rows
  const step = !isDown ? 1 : -1
    // console.log(start)
    // console.log(step)


  for (let i = start; !isDown ? i <= rows : i >= 1; i += step){
    let space = (" ").repeat(rows-i)
    let chars = char.repeat(i*2-1)
    output += space + chars + "\n"
  }
  return "\n" + output 

}

console.log(pyramid("o", 4, true))
