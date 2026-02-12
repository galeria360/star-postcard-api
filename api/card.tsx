import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'nodejs' };

export default function handler() {
return new ImageResponse(
(
<div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f97316', color: 'white', fontSize: 60 }}>
PROJEKT DZIAŁA! ⭐
</div>
),
{ width: 600, height: 400 }
);
}
