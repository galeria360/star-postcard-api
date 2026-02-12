import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

// ZMIANA: Usuwamy 'edge', wpisujemy 'nodejs'
export const config = { runtime: 'nodejs' };

export default function handler(req: NextRequest) { return new ImageResponse( ( <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f97316', color: 'white', fontSize: 60, fontWeight: 'bold' }}> PROJEKT DZIAŁA! ⭐ </div> ), { width: 600, height: 400 } ); }
