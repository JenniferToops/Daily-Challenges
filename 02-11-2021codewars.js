//is this my tail

function correctTail(body, tail) {
    //body is a string
    //tail is a character
    //need to see if body[length-1] === character
      if (body[body.length-1] === tail) {
        return true
      } else {
        return false
      }
  }  