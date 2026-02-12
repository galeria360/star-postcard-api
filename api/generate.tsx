import { ImageResponse } from '@vercel/og';

export const config = {
runtime: 'nodejs'
};

export default function handler() {
try {
return new ImageResponse(
(
<div style={{
height: '100%',
width: '100%',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#f97316',
color: 'white'
}}>
<h1 style={{ fontSize: 60 }}>DZIAŁA! ⭐⭐⭐⭐⭐</h1>
<p style={{ fontSize: 30 }}>Silnik Node.js aktywny</p>
</div>
),
{
width: 600,
height: 400,
}
);
} catch (e) {
return new Response(Błąd: ${e.message}, { status: 500 });
}
}
