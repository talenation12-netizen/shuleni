export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    system: "Shuleni API running 🚀"
  });
}