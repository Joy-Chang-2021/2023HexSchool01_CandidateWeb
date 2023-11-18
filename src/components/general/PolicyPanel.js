"use client"
import { useEffect, useState } from "react"
import { Box, Flex, Center, Text, Image, Icon } from "@chakra-ui/react"
import styled from "styled-components"
// icon
import { PiggyBank, FirstAidKit, Handshake, Park, Storefront, PawPrint, Buildings, BowlFood, Video } from "assets/icons"


const Api_IssueList = [{
    Type: "寵物醫療保障方案",
    Caption: "為毛孩子謀福利！推動寵物醫療保障方案",
    PolicyList: [{
        Title: "設立寵物醫療基金",
        Description: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
        Icon: PiggyBank
    }, {
        Title: "提供醫療補助",
        Description: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
        Icon: FirstAidKit
    }, {
        Title: "合作動物醫院",
        Description: "目前已有和超過 200 家動物醫院進行初步的合作討論。",
        Icon: Handshake
    }]
}, {
    Type: "寵物休閒與娛樂場所",
    Caption: "打造休閒天堂！推廣寵物休閒與娛樂場所",
    PolicyList: [{
        Title: "建立寵物公園",
        Description: "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。",
        Icon: Park
    }, {
        Title: "推廣寵物友善商家",
        Description: "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。",
        Icon: Storefront
    }, {
        Title: "舉辦寵物活動和工作坊",
        Description: "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。",
        Icon: PawPrint
    }]
}, {
    Type: "推廣寵物飼養教育",
    Caption: "推廣寵物飼養教育，讓愛更加專業",
    PolicyList: [{
        Title: "建立寵物飼養教育中心",
        Description: "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
        Icon: Buildings
    }, {
        Title: "推廣寵物飼養課程",
        Description: "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
        Icon: BowlFood
    }, {
        Title: "製作教育資料",
        Description: "出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識",
        Icon: Video
    }]
}]

export default function PolicyPanel () {

    const [ActiveIndex, setActiveIndex] = useState(0)
    const [IssueList, setIssueList] = useState([])

    useEffect(() => {
        setIssueList(Api_IssueList.map(issue => ({
            ...issue,
            TypeLine1: issue.Type.slice(0, 4),
            TypeLine2: issue.Type.slice(4),
        })))
    }, [])

    console.log("IssueList: ", IssueList)

    return (
        <Box>
            {/* 分類標籤 */}
            <Flex>
                {IssueList.map((issue, index) => (
                    <Flex as="button" w="calc(100% / 3)" p="sp3" borderRadius="16px 16px 0 0"
                            direction={{ base:"column", lg: "row" }} align="center" justify="center"
                            bgColor={ActiveIndex === index ? "primary.100" : "primary.400" }
                            _hover={{ bgColor: "primary.300" }}
                            onClick={() => setActiveIndex(index)}>
                        <Text textStyle="title20" pointerEvents="none">{issue.TypeLine1}</Text>
                        <Text textStyle="title20" pointerEvents="none">{issue.TypeLine2}</Text>
                    </Flex>
                ))}
            </Flex>
            {/* 政見 */}
            {IssueList.length && 
                <Flex direction="column" gap="sp5"
                      py="sp4" px={{ lg: "sp4" }} align="center" bgColor="primary.100">
                    <Text textStyle="title28" color="primary.500">{IssueList[ActiveIndex].Caption}</Text>
                    <Flex direction={{ base: "column", lg: "row" }} w="100%" justify={{ lg: "space-around" }}
                          gap="sp4" mb="26px" px={{ base: "sp3", lg: "0" }}>
                        {IssueList[ActiveIndex].PolicyList.map(policy => (
                            <Flex pos="relative" zIndex="10" direction="column" gap="sp2" w={{ lg: "320px" }} px={{ lg: "sp4" }} align="center">
                                <Box pos="absolute" zIndex="-5" w="240px" h="110px"
                                     top="25%" transform="rotate(-15deg)"
                                     borderRadius="50%" bgColor="primary.300"></Box>
                                <Center>
                                    <Icon as={policy.Icon} w="128px" h="128px"/>
                                </Center>
                                <Text textStyle="title28">{policy.Title}</Text>
                                <Text textStyle="body16" textAlign="center">{policy.Description}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            }
        </Box>
    )
}