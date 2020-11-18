const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questions = [
  'What is your name? ',
  'Where do you live? ',
  'Who do you do? '
]

const askQuestion = question => {
  let answerPromise = new Promise(reslove => {
    rl.question(question, answer => {
      reslove(answer)
    })
  })

  return answerPromise
}

const collectAnswers = async (questions, callback) => {
  const answers = []

  for (const q of questions) {
    const answer = await askQuestion(q)
    answers.push(answer)
  }

  callback(answers)
}

collectAnswers(questions, answers => {
  console.log('Thank you for your answers. ')
  console.log(answers)
  process.exit()
})
