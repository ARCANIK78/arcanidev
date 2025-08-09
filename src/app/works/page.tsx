import { Container, Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "@/components/section";
import Layout from "@/components/article";
import { WorkGridItem } from "@/components/grid-item";
import {works} from "@/data/works"
import { delay } from "framer-motion";
const Works = () => {
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
                            thumbnail={work.thumbnail}
                            >
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