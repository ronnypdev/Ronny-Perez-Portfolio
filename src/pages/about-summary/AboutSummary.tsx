import { FC, useState } from "react";

import { Box, Flex, Heading, Text, Image, Accordion, AccordionItem } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Expandable } from "pages/about-summary/expandable/Expandable";

export const AboutSummary: FC = () => {
    const content = useContent(MarkdownFile.AboutSummary);
    const [experiencesExpanded, setExperiencesExpanded] = useState<number[]>([]);
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);

    console.log({ experiencesExpanded }, { educationExpanded });

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35">
                    <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" />
                </Box>
                <Box flex="0.85">
                    <Heading>{configs.common.name}</Heading>
                    <Text fontWeight="bold" opacity="0.5">
                        {configs.common.pronunciation}
                    </Text>
                    <Box pt="4">
                        <Content fontSize="lg">{content.aboutSummary}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink="0" overflow="hidden">
                    <Heading fontSize="2xl" fontWeight="medium">
                        Education
                    </Heading>
                    <br />

                    <Accordion pt="2" allowMultiple fontWeight="500" index={educationExpanded} id="education">
                        {configs.aboutSummary.educations.map((edu, idx) => (
                            <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                                <Expandable
                                    title={edu.school}
                                    subTitle={edu.degree}
                                    date={edu.duration}
                                    content={edu.content}
                                    id={edu.id}
                                    idx={idx}
                                    onChange={setEducationExpanded}
                                    expanded={educationExpanded}
                                />
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Heading fontSize="2xl" fontWeight="medium">
                        Experiences
                    </Heading>
                    <br />
                    <Accordion pt="2" allowMultiple fontWeight="500" index={experiencesExpanded}>
                        {configs.aboutSummary.experiences.map((exp, idx) => (
                            <AccordionItem p="0" border="0" mb="4" key={`panel-${exp.company}`}>
                                <Expandable
                                    id={exp.id}
                                    title={exp.company}
                                    subTitle={exp.position}
                                    date={exp.position}
                                    content={exp.description}
                                    idx={idx}
                                    onChange={setExperiencesExpanded}
                                    expanded={experiencesExpanded}
                                />
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>
            </Flex>
        </Box>
    );
};
