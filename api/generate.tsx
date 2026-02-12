import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = { runtime: 'edge' };

export default function handler(req: NextRequest) { return new ImageResponse( ( <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', fontSize: 40 }}> <div style={{ marginBottom: 20 }}>🏢 Twoja Firma</div> <div style={{ color: '#f97316' }}>⭐⭐⭐⭐⭐</div> <div style={{ fontSize: 24, marginTop: 20 }}>Dziękujemy za opinię!</div> </div> ), { width: 600, height: 400 } ); }
