export const config = { runtime: 'nodejs' };

export default function handler(req, res) {
res.setHeader('Content-Type', 'text/html');
res.status(200).send('<h1>Status: Serwer Zyje!</h1><p>Skonfigurowalismy modul ES. Teraz mozemy wracac do grafiki.</p>');
}
