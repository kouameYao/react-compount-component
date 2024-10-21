import { PropsWithChildren, createContext, useContext } from "react";
import "./PostCard.css";

export type Post = {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
};

type PostCardContext = {
  post: Post;
};

type PostCardProps = PropsWithChildren & {
  post: Post;
};

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

function usePostCardContext() {
  const context = useContext(PostCardContext);

  if (!context) {
    throw new Error(
      "usePostCardContext must be used within a PostCardProvider"
    );
  }

  return context;
}

export const PostCard = ({ post, children }: PostCardProps) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      {children}
    </PostCardContext.Provider>
  );
};

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();

  return <h2 className="title">{post.title}</h2>;
};

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext();

  return <p className="content">{post.content}</p>;
};

PostCard.Author = function PostCardAuthor() {
  const { post } = usePostCardContext();

  return <p className="author">{post.author.name}</p>;
};

PostCard.Actions = function PostCardActions() {
  return (
    <div className="actions">
      <button type="button">Delete</button>
      <button type="button">Edit</button>
    </div>
  );
};
