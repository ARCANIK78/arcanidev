import { Container, Heading, SimpleGrid, Divider} from "@chakra-ui/react";
import Section from "@/components/section";
import Layout from "@/components/article";

const Works = () => {
    return(
        <Container pt={20}>
            <Layout title="Works">
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
            </Layout>
        </Container>
    )
}
export default Works