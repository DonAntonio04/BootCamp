import React from "react";

export default function SchoolSystem() {
  // Datos simulados
  const classrooms = [
    {
      name: "Aula 1",
      teacher: {
        name: "Prof. Ramírez",
        subjects: ["Matemáticas", "Física"],
        experience: 10,
      },
      students: [
        { name: "Ana", age: 17, grades: [90, 85, 88], course: "Cálculo" },
        { name: "Luis", age: 18, grades: [78, 80, 82], course: "Álgebra" },
        { name: "Sara", age: 17, grades: [95, 97, 92], course: "Geometría" },
      ],
    },
    {
      name: "Aula 2",
      teacher: {
        name: "Prof. Torres",
        subjects: ["Historia", "Literatura"],
        experience: 8,
      },
      students: [
        { name: "Carlos", age: 16, grades: [75, 80, 70], course: "Historia" },
        { name: "Elena", age: 17, grades: [90, 93, 88], course: "Literatura" },
        { name: "Miguel", age: 16, grades: [60, 65, 70], course: "Filosofía" },
      ],
    },
  ];

  // Componente School
  function School({ classrooms }) {
    return (
      <>
        <h1>🏫 Sistema de Gestión Escolar</h1>
        {classrooms.map((c, i) => (
          <Classroom key={i} {...c} />
        ))}
      </>
    );
  }

  // Componente Classroom
  function Classroom({ name, teacher, students }) {
    const allGrades = students.flatMap((s) => s.grades);
    const avgClass = (allGrades.reduce((a, b) => a + b, 0) / allGrades.length).toFixed(2);

    const bestStudent = students.reduce((a, b) =>
      average(b.grades) > average(a.grades) ? b : a
    );

    return (
      <>
        <h2>{name}</h2>
        <Teacher {...teacher} />
        <p>Promedio general del aula: {avgClass}</p>
        <p>🏅 Mejor estudiante: {bestStudent.name} ({average(bestStudent.grades)})</p>
        {students.map((s, i) => (
          <Student key={i} {...s} />
        ))}
        <hr />
      </>
    );
  }

  // Componente Teacher
  function Teacher({ name, subjects, experience }) {
    return (
      <>
        <p>👨‍🏫 Profesor: {name}</p>
        <p>Materias: {subjects.join(", ")}</p>
        <p>Experiencia: {experience} años</p>
      </>
    );
  }

  // Componente Student
  function Student({ name, age, grades, course }) {
    const avg = average(grades);
    return (
      <>
        <p>👩‍🎓 Nombre: {name} | Edad: {age} | Curso: {course}</p>
        <p>Calificaciones: {grades.join(", ")} | Promedio: {avg}</p>
      </>
    );
  }

  // Función utilitaria para promedios
  function average(arr) {
    if (!arr || arr.length === 0) return 0;
    return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
  }

  return <School classrooms={classrooms} />;
}
