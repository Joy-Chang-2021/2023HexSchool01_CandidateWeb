"use client"
import { Box, Center, Grid, Image, Icon, Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"
// component
import ButtonM from "components/general/ButtonM"
// icon + image
import { ArrowRight } from "assets/icons"
import { Event_Forum, Event_Street, Event_Model } from "assets/images"

const OverflowText = styled(Text)`
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;  
    overflow: hidden;
`
const LatestEventList = [{
    Image: Event_Forum,
    Title: "參與台北寵物論壇，爭取貓咪友善環境",
    Description: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    Date: "12.26.2023",
    Link: ""
}, {
    Image: Event_Street,
    Title: "掃街模式開啟！帶著你的貓耳，和我一起走！",
    Description: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
    Date: "12.24.2023",
    Link: ""
}, {
    Image: Event_Model,
    Title: "收容所模特兒大比拼！",
    Description: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    Date: "12.20.2023",
    Link: ""
}]

export default function Latest () {
    return (
        <Flex direction="column"
              mx={{ base: "sp3", lg: "0" }}
              my={{ base: "sp4", lg: "sp6" }}
              gap={{ base: "sp4", lg: "sp6" }}>
            {/* 候選主張 */}
            <Flex direction={{ base: "column", lg: "row" }}
                  gap={{ base: "sp3", lg: "sp4" }}>
                <Box w={{ lg: "264px" }} color="primary.500">
                    <Text textStyle="title48">候選主張</Text>
                    <Text textStyle="title20">Candidate Claims</Text>
                </Box>
                <Flex direction="column" gap="sp3"
                      w={{ lg: "calc(100% - 264px - 32px)" }}
                      textStyle="body16" color="gray.500">
                    <Text>我黑新星堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</Text>
                    <Text>因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</Text>
                </Flex>
            </Flex>
            {/* 最新活動 */}
            <Flex direction={{ base: "column", lg: "row" }}
                  gap={{ base: "sp3", lg: "sp4" }}
                  w="100%">
                <Box w={{ lg: "264px" }} color="primary.500">
                    <Text textStyle="title48">最新活動</Text>
                    <Text textStyle="title20">Latest Events</Text>
                </Box>
                <Flex direction="column" w={{ base: "100%", lg: "calc(100% - 264px - 32px)" }} gap="sp4">
                    {LatestEventList.map(event => (
                        <Flex direction={{ base: "column", lg: "row" }} w="100%" gap="sp3">
                            <Box pos="relative" w={{ base: "100%", lg: "264px" }} pb="17px">
                                <Image src={event.Image} w="calc(100% - 17px)"
                                    border="2px solid #EEFFA9"
                                    borderRadius="16px"
                                    boxShadow="17px 17px 0 #EEFFA9"/>
                            </Box>
                            <Flex w={{lg: "calc(100% - 264px - 16px)"}}
                                direction="column" gap={{ base: "sp2" }}
                                justify="space-between">
                                <Text textStyle="title28" color="primary.500">{event.Title}</Text>
                                <OverflowText textStyle="body16">{event.Description}</OverflowText>
                                <Flex align="center" justify="space-between">
                                    <Text textStyle="body16" color="primary.500">{event.Date}</Text>
                                    <ButtonM>
                                        <Flex align="center">
                                            <Text as="span" fontWeight="900">閱讀更多</Text>
                                            <Icon as={ArrowRight} w="24px" h="24px" ml="sp2"/>                                    
                                        </Flex>
                                    </ButtonM>
                                </Flex>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}