export const config = { runtime: 'nodejs' };

export default function handler(req, res) {
const url = new URL(req.url, https://${req.headers.host});
const customerName = url.searchParams.get('customerName') || 'Klient';
const businessName = url.searchParams.get('businessName') || 'Galeria360';

const html = <!DOCTYPE html> <html> <head> <meta charset="UTF-8"> <style> body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f0f0; font-family: sans-serif; } .card { width: 500px; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; border: 1px solid #ddd; } .header { background: #f97316; color: white; padding: 25px; font-size: 24px; font-weight: bold; } .content { padding: 40px; } .stars { color: #f97316; font-size: 50px; margin-bottom: 10px; } .name { font-size: 32px; font-weight: bold; color: #333; margin-top: 10px; } .text { color: #666; margin-top: 15px; font-size: 18px; line-height: 1.5; } .button { display: inline-block; margin-top: 30px; background: #f97316; color: white; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; } </style> </head> <body> <div class="card"> <div class="header">🏢 ${businessName}</div> <div class="content"> <div class="stars">⭐⭐⭐⭐⭐</div> <div class="name">Cześć ${customerName}!</div> <div class="text">Twoja opinia sprawiła nam ogromną radość.<br>Dziękujemy, że wspierasz Galerię360!</div> <a href="#" class="button">Odbierz niespodziankę</a> </div> </div> </body> </html>;

res.setHeader('Content-Type', 'text/html');
res.status(200).send(html);
}
