export default function Login(req, res) {
  if (req.method === 'GET') {
    return res.status(500).json({ message: 'Method not allowed' });
  }
  return res.status(200).json({ message: 'ok' });
}
