function takeANumber(katzDeliLine, name) {
  katzDeliLine = katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine} in line.`);
}

//for above Welcome Message, consider using String Interpolation Template Literals? 

function nowServing(katzDeliLine) {
 
  if
    (katzDeliLine.length >= 1) {
      
      return "Currently serving " + katzDeliLine.shift() + ".";
    }
  else {
      return ("There is nobody waiting to be served!");
  }
}

function currentLine(katzDeliLine) {
  for (let i = 0; i < katzDeliLine.length; i++) {
  // code block to be executed
  return (`The line is currently: ${i} . ${katzDeliLine[i]}`);
}
    return ("The line is currently empty.");
}
  

