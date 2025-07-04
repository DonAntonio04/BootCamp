import React from "react";

export default function CoursePlatform() {
  // Datos de ejemplo
  const courses = [
    {
      name: "Curso de React",
      instructor: "Laura Jiménez",
      rating: 4,
      progress: 80,
    },
    {
      name: "Curso de Node.js",
      instructor: "Carlos Ríos",
      rating: 5,
      progress: 60,
    },
    {
      name: "Curso de CSS",
      instructor: "Ana López",
      rating: 3,
      progress: 90,
    },
  ];

  // Nivel 1: Curso
  function Course({ name, instructor, rating, progress }) {
    return (
      <div style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
        <h2>{name}</h2>
        <Instructor name={instructor} />
        <Rating stars={rating} />
        <ProgressBar percent={progress} />
        {[1, 2, 3, 4].map((n) => (
          <Module key={n} number={n} />
        ))}
      </div>
    );
  }

  // Nivel 2: Módulo
  function Module({ number }) {
    return (
      <div style={{ marginLeft: "1rem" }}>
        <h3>Módulo {number}</h3>
        {[1, 2, 3].map((n) => (
          <Lesson key={n} title={`Lección ${n}`} />
        ))}
      </div>
    );
  }

  // Nivel 3: Lección
  function Lesson({ title }) {
    return <p style={{ marginLeft: "2rem" }}>📘 {title}</p>;
  }

  // Nivel 4: Instructor (reutilizable)
  function Instructor({ name }) {
    return <p>Instructora: {name}</p>;
  }

  // Nivel 5: Barra de progreso
  function ProgressBar({ percent }) {
    return (
      <div style={{ margin: "0.5rem 0" }}>
        <div style={{ background: "#ddd", height: "10px", width: "100%" }}>
          <div style={{ width: `${percent}%`, height: "10px", background: "#4caf50" }} />
        </div>
        <small>Progreso: {percent}%</small>
      </div>
    );
  }

  // Nivel 6: Rating
  function Rating({ stars }) {
    return (
      <p>
        ⭐ {Array.from({ length: 5 }, (_, i) => (i < stars ? "★" : "☆")).join("")}
      </p>
    );
  }

  return (
    <div>
      <h1>Plataforma de Cursos Online</h1>
      {courses.map((course, index) => (
        <Course key={index} {...course} />
      ))}
    </div>
  );
}
