import { works } from '@/data/works'
import { notFound } from 'next/navigation'
import WorkDetailClient from '@/components/work-detail-client'
interface Props {
  params: { id: string }
}

export default function WorkDetailPage({ params }: Props) {
  const work = works.find(w => w.id === params.id)

  if (!work) {
    notFound()
  }

  return <WorkDetailClient work={work} />
}
