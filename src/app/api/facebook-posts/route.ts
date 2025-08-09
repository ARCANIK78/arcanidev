
import { NextResponse } from 'next/server';

export async function GET() {
  const PAGE_ID = "768559203002227";
  const ACCESS_TOKEN =
    "EAFXsKZCXyvHcBPBnDVPFDECGztDfkwYj8PkGzUqxZBUFqZAPMsY90xGtGrjI9XX638LcgP4WTNGoN2q6c4fKHtdS7Pa74DGs2L4I68ZAOcH5aZC128UplJxZAOKkmpZAwJuV62KMddqJUanlIeQaZB8ZAuGPEiiA0iD20z4apyx98vCQu8JFeb2wzak5WAZBlZA8a3d4kmZC";

const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=id,message,created_time,full_picture,permalink_url,attachments{media,type}&access_token=${ACCESS_TOKEN}`;

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
