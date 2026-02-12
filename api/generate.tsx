import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = { runtime: 'edge' };

export default function handler(req: NextRequest) { return new ImageResponse( ( <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', color: 'white', fontSize: 50 }}> TEST DZIALA ⭐⭐⭐⭐⭐ </div> ), { width: 600, height: 400 } ); }
