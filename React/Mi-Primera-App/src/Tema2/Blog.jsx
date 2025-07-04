import React from "react";

export default function BlogApp() {
  const posts = [
    {
      id: 1,
      title: "¿Qué es React?",
      content: "React es una biblioteca de JavaScript para construir interfaces de usuario.",
      comments: ["Excelente explicación", "Muy útil, gracias"]
    },
    {
      id: 2,
      title: "Componentes en React",
      content: "Los componentes nos permiten dividir la UI en partes reutilizables.",
      comments: ["Buen ejemplo", "Ahora lo entiendo mejor"]
    }
  ];

  // Nivel 1
  function Blog() {
    return (
      <div>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    );
  }

  // Nivel 2
  function BlogPost({ post }) {
    return (
      <div style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
        <PostHeader title={post.title} />
        <PostContent content={post.content} />
        <PostFooter comments={post.comments} />
      </div>
    );
  }

  // Nivel 3
  function PostHeader({ title }) {
    return (
      <div>
        <h2>{title}</h2>
        <AuthorInfo />
      </div>
    );
  }

  // Nivel 4
  function PostContent({ content }) {
    return (
      <div>
        <p>{content}</p>
        <AuthorInfo />
      </div>
    );
  }

  // Nivel 5
  function PostFooter({ comments }) {
    return (
      <div>
        <CommentSection comments={comments} />
      </div>
    );
  }

  // Nivel 6
  function CommentSection({ comments }) {
    return (
      <div>
        <h4>Comentarios</h4>
        {comments.map((text, index) => (
          <Comment key={index} text={text} />
        ))}
      </div>
    );
  }

  function Comment({ text }) {
    return (
      <div>
        <p>💬 {text}</p>
        <AuthorInfo />
      </div>
    );
  }

  function AuthorInfo() {
    return <small>✍️ Autor: José A. M. B.</small>;
  }

  return (
    <div>
      <h1>📰 Mi Blog Personal</h1>
      <Blog />
    </div>
  );
}
