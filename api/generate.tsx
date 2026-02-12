import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Pobieranie danych z URL (to wyśle Twoja wtyczka)
    const customerName = searchParams.get('customerName') || 'Kliencie';
    const businessName = searchParams.get('businessName') || 'Nasza Firma';
    const theme = searchParams.get('theme') || 'ocean';
    const message = searchParams.get('message') || 'Dziękujemy za wizytę!';

    // Definicja kolorów dla motywów
    const themes = {
      ocean: 'linear-gradient(135deg, #0284c7, #0891b2)',
      sunset: 'linear-gradient(135deg, #ea580c, #f97316)',
      nordic: 'linear-gradient(135deg, #475569, #64748b)',
    };

    const background = themes[theme] || themes.ocean;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Header z gradientem */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: background,
              width: '100%',
              height: '40%',
              padding: '20px',
            }}
          >
            <div style={{ fontSize: 60, marginBottom: 10 }}>🏢</div>
            <div style={{ fontSize: 32, color: 'white', fontWeight: 'bold' }}>
              {businessName}
            </div>
          </div>

          {/* Body pocztówki */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '40px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 15 }}>
              Cześć {customerName}! 👋
            </div>
            <div style={{ fontSize: 18, color: '#4b5563', marginBottom: 20, maxWidth: '80%' }}>
              {message}
            </div>
            <div style={{ fontSize: 40, letterSpacing: 10, marginBottom: 20 }}>
              ⭐⭐⭐⭐⭐
            </div>
            <div
              style={{
                background: background,
                color: 'white',
                padding: '15px 30px',
                borderRadius: '12px',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              🌟 Podziel się opinią
            </div>
          </div>
        </div>
      ),
      {
        width: 600,
        height: 500,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}
