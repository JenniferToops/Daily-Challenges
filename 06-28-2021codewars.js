let user = {
    firstName: 'Philip',
    lastName: 'Obosi',
    contributions: 200,
    country: 'Nigeria',
    role: 'Frontend',
    languagesSpoken: ['English', 'Igbo','French']
}

console.log(user.firstName)
// Philip

console.log(user.firstName + " " + user.lastName)
//Philip Obosi

function addLanguage(language) {
    return user.languagesSpoken.push(language)
}

addLanguage('Swahili')

console.log(user.languagesSpoken)
//["English", "Igbo", "French", "Swahili"]