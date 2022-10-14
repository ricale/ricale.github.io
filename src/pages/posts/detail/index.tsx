import { useEffect } from "react";

function PostDetailPage() {
  useEffect(() => {
    fetch('./posts').then(res => res.text())
    .then(res => 
      console.log('res', res)
    )
  }, []);

  return (
    <div>
      <h1>PostDetailPage</h1>
    </div>
  )
}

export default PostDetailPage;
