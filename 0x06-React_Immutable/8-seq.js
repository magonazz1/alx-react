import { Seq, Map } from 'immutable';

export default function printBestStudents(inputObject) {
  const newMap = Map(inputObject);
  const lazySeq = Seq(newMap);

  // Use Seq to filter and transform the data
  const filteredStudents = lazySeq
    .filter(student => student.score >= 70)
    .map(student => ({
      score: student.score,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  // Prepare and print each student object in the required format
  filteredStudents.forEach((student, key) => {
    const studentObject = {
      [key]: {
        score: student.score,
        firstName: student.firstName,
        lastName: student.lastName,
      }
    };
    console.log(JSON.stringify(studentObject, null, 2));
  });
}

// Example usage:
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
  3: {
    score: 85,
    firstName: 'jane',
    lastName: 'smith',
  },
};

printBestStudents(grades);
