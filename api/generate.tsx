import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = { runtime: 'edge' };

export default function handler(req: NextRequest) { return new ImageResponse( ( <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', fontSize: 60 }}> <div style={{ color: '#f97316' }}>⭐⭐⭐⭐⭐</div> <div style={{ marginTop: 20 }}>Projekt Działa!</div> </div> ), { width: 600, height: 400 } ); }
