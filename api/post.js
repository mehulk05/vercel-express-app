export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    if (!response.ok) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const post = await response.json();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
}
