import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function () {
return new ImageResponse(
(
<div style={{ fontSize: 60, color: 'white', background: 'orange', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
DZIALA! ⭐⭐⭐⭐⭐
</div>
),
{ width: 600, height: 400 }
);
}
