import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'nodejs' };

export default function handler(req) {
const { searchParams } = new URL(req.url, '');
const customerName = searchParams.get('customerName') || 'Klient';
const businessName = searchParams.get('businessName') || 'Twoja Firma';

return new ImageResponse( ( <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', fontFamily: 'sans-serif' }}> <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f97316', width: '100%', padding: '40px', color: 'white' }}> <div style={{ fontSize: 30 }}>🏢 {businessName}</div> </div> <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}> <div style={{ fontSize: 50, marginBottom: '10px' }}>⭐⭐⭐⭐⭐</div> <div style={{ fontSize: 40, fontWeight: 'bold' }}>Cześć {customerName}!</div> <div style={{ fontSize: 24, marginTop: '20px', color: '#666' }}>Dziękujemy za Twoją opinię!</div> </div> </div> ), { width: 600, height: 400 } ); }
