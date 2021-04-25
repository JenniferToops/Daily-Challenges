//Simple validation of a username with regex

function validateUsr(username) {
    //username needs to be 4-16 characters
    //username can contain undercase letters
    //username can contain numbers
    //username can contain underscore
    if (username.length < 4 || username.length > 17) { 
      return false
     } else {
    const regex = new RegExp(/^[a-z0-9_]+$/)
      res = regex.test(username)
      }
      return res
  }

  /*
  function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
    }
*/