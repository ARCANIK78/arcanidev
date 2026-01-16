
import { NextResponse } from 'next/server';

export async function GET() {
  const PAGE_ID = '768559203002227';
  const PAGE_TOKEN = process.env.FACEBOOK_PAGE_TOKEN;

  if (!PAGE_TOKEN) {
    return NextResponse.json(
      { error: 'FACEBOOK_PAGE_TOKEN no está definido' },
      { status: 500 }
    );
  }

  const url =
    `https://graph.facebook.com/v24.0/${PAGE_ID}/posts` +
    `?fields=id,message,created_time,full_picture,permalink_url,attachments{media,type}` +
    `&access_token=${PAGE_TOKEN}`;

  try {
    const response = await fetch(url, {
      cache: 'no-store',
    });
    const data = await response.json();
    if (data?.error) {
      return NextResponse.json(
        {
          error: data.error.message,
          code: data.error.code,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(data, { status: 200 });

  } catch (err) {
    console.error('Facebook API error:', err);

    return NextResponse.json(
      { error: 'Error al consultar Facebook Graph API' },
      { status: 500 }
    );
  }
}

