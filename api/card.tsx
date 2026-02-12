export const config = { runtime: 'nodejs' };

export default function handler(req, res) {
res.status(200).send('<h1>Serwer działa!</h1><p>Jeśli to widzisz, mozemy wgrywac grafikę.</p>');
}
