const students = [
  {
    name: 'Maikão',
    grade1: 10,
    grade2: 10
  },
  {
    name: 'Roger',
    grade1: 7,
    grade2: 9
  },
  {
    name: 'Marco Túlio',
    grade1: 6,
    grade2: 4
  }
]

const calculateAverage = (grade1, grade2) => {
  return (grade1 + grade2) / 2
}

const approvedOrNot = (students) => {
  for(let student of students) {
    const result = calculateAverage(student.grade1, student.grade2);
    if (result >= 7) {
      alert(`A média do(a) aluno(a) ${student.name} é: ${result}\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
      alert(`A média do(a) aluno(a) ${student.name} é: ${result}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
    }
  }
} 

approvedOrNot(students)
