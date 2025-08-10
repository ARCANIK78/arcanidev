import { works } from '@/data/works'
import { notFound } from 'next/navigation'
import WorkDetailClient from '@/components/work-detail-client'

export default async function WorkDetailPage(props: { params: any }) {
  const params = await Promise.resolve(props.params); // fuerza a await si fuera promesa
  const { id } = params;
  const work = works.find(w => w.id === id);

  if (!work) {
    notFound();
  }

  return <WorkDetailClient work={work} />;
}