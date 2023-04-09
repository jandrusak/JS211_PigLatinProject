const pigLatin = (word) => {
    word = document.getElementById('user-input').value
    word = word.toLowerCase().trim()
    console.log(word)
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelPosition = 0

    if (word==='') {
      document.getElementById('display-result').innerHTML = 'please type in a word'
      return false
    }

    if (!isNaN(word)) {
      document.getElementById('display-result').innerHTML = 'cannot use number, please type word'
      return false
    }
  
    if (vowels.includes(word[0])) {
      document.getElementById('display-result').innerHTML = word + 'yay'
      // return word + 'yay'
    } else {
      for (let i = 0; i<word.length; i++ ) {
        if (vowels.includes(word[i])) {
          vowelPosition = i 
          break
        }
      }
      document.getElementById('display-result').innerHTML = word.slice(vowelPosition) + word.slice(0, vowelPosition) + 'ay'
      // return word.slice(vowelPosition) + word.slice(0, vowelPosition) + 'ay'
    }
  
  
    // Your code here
  
  }