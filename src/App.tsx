import "./App.css";
import { Post, PostCard } from "./PostCard";

function App() {
  const post: Post = {
    id: 1,
    title: "Mastering Compound Components in React",
    content: `Compound components are an advanced pattern in React that enable you to create flexible and reusable UI components. 
            Instead of passing props down to deeply nested child components, you can expose child components that communicate 
            with each other by sharing implicit state from their parent. This pattern promotes better separation of concerns 
            and makes components more composable.`,
    author: {
      id: 1,
      name: "KOUAME Yao",
    },
  };

  return (
    <div className="card">
      <PostCard post={post}>
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.Author />
        <PostCard.Actions />
      </PostCard>
    </div>
  );
}

export default App;
