import { works } from '@/data/works'
import { notFound } from 'next/navigation'
import WorkDetailClient from '@/components/work-detail-client'
interface Props {
  params: Promise<{ id: string }>;
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const work = works.find(w => w.id === id)

  if (!work) {
    notFound()
  }

  return <WorkDetailClient work={work} />
}
