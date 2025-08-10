'use client'
import { WorkType } from '@/data/works'
import Layout from '@/components/article'
import { Badge, Container, List, ListItem, SimpleGrid, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta, Title, WorkImage } from '@/components/work'
import P from '@/components/paragraph'

interface Props {
  work: WorkType
}

const WorkDetailClient: React.FC<Props> = ({ work }) => {
  return (
    <Layout title={work.title} >
      <Container pt={20}>
        <Title>
          {work.title} <Badge>{work.year || '2024'}</Badge>
        </Title>
        <P>{work.description}</P>
        <List ml={4} my={4}>
          {work.platform && (
            <ListItem>
              <Meta>Platform</Meta>
              <span>{work.platform}</span>
            </ListItem>
          )}
          {work.stack && (
            <ListItem>
              <Meta>Stack</Meta>
              <span>{work.stack}</span>
            </ListItem>
          )}
          {work.source && work.source.length > 0 && (
            <ListItem>
              <Meta>Source</Meta>
              {work.source.map((url, i) => (
                <Link key={i} href={url.trim()} isExternal display="block" mb={1}>
                  {url.trim()} <ExternalLinkIcon mx="2px" />
                </Link>
              ))}
            </ListItem>
          )}
        </List>

        {work.images && (
          <>
            {work.images[0] && (
              <WorkImage
                src={typeof work.images[0] === 'string' ? work.images[0] : work.images[0].src}
                alt={work.title}
              />
            )}
            {work.images.length > 1 && (
              <SimpleGrid columns={2} gap={2}>
                {work.images.slice(1).map((img, i) => (
                  <WorkImage
                    key={i}
                    src={typeof img === 'string' ? img : img.src}
                    alt={`${work.title}-${i}`}
                  />
                ))}
              </SimpleGrid>
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export default WorkDetailClient
