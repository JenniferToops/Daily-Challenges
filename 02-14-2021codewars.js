//NBA full 48 minute playoff

function pointsPer48(ppg, mpg) {
    //ppg = points per game
    //mpg = minutes per game
    //game lasts 48 minutes
      if (ppg === 0 || mpg === 0) {
        return 0
    } else {
        return +(ppg * 48 / mpg).toFixed(1)
    }
  }