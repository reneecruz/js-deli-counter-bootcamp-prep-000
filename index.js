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
  while (katzDeliLine.length > 0) {
  // code block to be executed
  return (`The line is currently: ${katzDeliLine}`);
}
    return ("The line is currently empty.");
}
  

