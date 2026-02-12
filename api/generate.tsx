import { ImageResponse } from '@vercel/og';

export const config = {
runtime: 'edge',
};

export default function () { return new ImageResponse( ( <div style={{ display: 'flex', fontSize: 60, color: 'white', background: 'orange', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', }} > DZIAŁA! ⭐⭐⭐⭐⭐ </div> ), { width: 600, height: 400, } ); }
