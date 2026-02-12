export default function handler(req, res) {
const customerName = "Konrad";
const businessName = "Galeria360";

res.setHeader('Content-Type', 'text/html');
res.send(<div style="text-align:center; padding:50px; font-family:sans-serif; background:#f97316; color:white; border-radius:20px;"> <h1>⭐⭐⭐⭐⭐</h1> <h2>Czesc ${customerName}!</h2> <p>Dziekujemy za opinie dla ${businessName}</p> </div>);
}
