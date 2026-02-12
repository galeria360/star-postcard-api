export const config = { runtime: 'nodejs' };

export default function handler(req, res) {
const { searchParams } = new URL(req.url, https://${req.headers.host});
const customerName = searchParams.get('customerName') || 'Klient';
const businessName = searchParams.get('businessName') || 'Twoja Firma';

const html = <html> <body style="margin:0; padding:0; display:flex; justify-content:center; align-items:center; height:100vh; background-color:#f0f0f0; font-family:sans-serif;"> <div style="width:600px; height:400px; background:white; border-radius:15px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1); display:flex; flexDirection:column;"> <div style="background:#f97316; color:white; padding:30px; text-align:center;"> <div style="font-size:24px; opacity:0.9;">🏢 ${businessName}</div> </div> <div style="padding:40px; text-align:center; display:flex; flex-direction:column; align-items:center;"> <div style="font-size:50px; margin-bottom:10px;">⭐⭐⭐⭐⭐</div> <div style="font-size:35px; font-weight:bold; color:#333;">Cześć ${customerName}!</div> <div style="font-size:20px; color:#666; margin-top:15px;">Dziękujemy za Twoją zaufanie i opinię.</div> <div style="margin-top:30px; background:#f97316; color:white; padding:12px 25px; border-radius:30px; font-weight:bold;">Twój prezent czeka!</div> </div> </div> </body> </html>;

res.setHeader('Content-Type', 'text/html');
res.status(200).send(html);
}
