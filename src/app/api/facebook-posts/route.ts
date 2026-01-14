
import { NextResponse } from 'next/server';

export async function GET() {
  const PAGE_ID = "768559203002227";
  const ACCESS_TOKEN =
    "EAFXsKZCXyvHcBQcZC0WWJSOZBiMmL8SXRDnNKHhZBAlMkzOZA2OlrP3cpeTYAEXieSpasCk1m7ZBsmDvt6fEjHEGRCJNzO2LyawyalBjZCUiBFOz8bUzZBAky0ZAbSgoXcWmMaRZAUdUdkV3JYUpj56Oag1D1Re9F80kYwg1WDldRvryf9JY5QNo0Nt8udpYxP7HP1XseIW5iyDsgg0ikBTP1ZAkM5VynTAkUthRXbm3cgZD";

const url = `https://graph.facebook.com/v24.0/${PAGE_ID}/posts?fields=id,message,created_time,full_picture,permalink_url,attachments{media,type}&access_token=${ACCESS_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error al consultar Facebook API' }, { status: 500 });
  }
}
