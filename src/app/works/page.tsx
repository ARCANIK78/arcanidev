import { Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "@/components/section";
import Layout from "@/components/article";
import { WorkGridItem } from "@/components/grid-item";
import {works} from "@/data/works"
import { StaticImageData } from "next/image";

const Works = () => {
    const noImage = "/picture/noImage/image.png"
    return(
        <Container pt={20}>
            <Layout title="Works">
                <Container>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Works
                    </Heading>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        {works.map((work, index) => (
                        <Section key={work.id} delay={index * 0.1}>
                            <WorkGridItem
                            id={work.id}
                            title={work.title}
                            thumbnail={work.thumbnail ?? noImage}
                            >
                             {""}
                            </WorkGridItem>
                        </Section>
                        ))}
                    </SimpleGrid>
                </Container>
            </Layout>
        </Container>
    )
}
export default Works
