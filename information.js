const information = (Firstname, Lastname, age) => {
  let ageUserValue = age
  let majorityAge = 18
  let cantVote = ageUserValue >= majorityAge ? true : false
  let youCanVote = cantVote ? `vous êtes majeur depuis ${ageUserValue - majorityAge} ans` : `vous serez majeur dans ${majorityAge - ageUserValue} ans`

  console.log(`prenom: ${Firstname}\nnom: ${Lastname}\nage: ${age}\n${youCanVote}`)
  
}


information('Sofiane', 'Akermoun', 39)