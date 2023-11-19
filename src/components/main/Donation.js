"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import { v4 as uuid } from 'uuid'
// component
import DonationCard from "components/general/DonationCard"
// icon
import { MoonStars, Planet, Sun, ShootingStar } from "assets/icons"

const DonationList = [{
    Id: uuid(),
    Name: "喵衛星",
    Price: 600,
    People: 2000,
    Icon: MoonStars
}, {
    Id: uuid(),
    Name: "喵行星",
    Price: 6000,
    People: 2000,
    Icon: Planet
}, {
    Id: uuid(),
    Name: "喵恆星",
    Price: 60000,
    People: 2000,
    Icon: Sun
}, {
    Id: uuid(),
    Name: "喵慧星",
    Price: 0,
    People: 2000,
    Icon: ShootingStar
}]

export default function Donation () {
    return (
        <Flex id="donation" direction={{ base: "column", lg: "row" }} my={{ base:"sp4", lg: "sp6" }} gap="sp4">
            <Flex direction="column" justify={{ lg: "space-between" }}
                  w={{ lg: "43%" }} gap="sp3">
                <Box >
                    <Box color="primary.500" mb={{ base: "sp3", lg: "sp4" }}>
                        <Text textStyle="title48">小額捐款</Text>
                        <Text textStyle="title20">Small Donations</Text>
                    </Box>
                    <Box>
                        <Text mb="sp3" textStyle="title28">您的每筆捐款，<br />是每隻毛孩未來的大大動力！</Text>
                    </Box>
                </Box>
                <Box px="sp3" py="sp3" borderRadius="16px" color="primary.300" bgColor="gray.600">
                    <Text textStyle="title20" mb="sp1">目前贊助金額</Text>
                    <Text textStyle="title48">{(987655873).toLocaleString()}</Text>
                </Box>
            </Flex>
            <Flex direction="column" w={{ lg: "calc(100% - 43% - 32px)" }} gap="sp3">
                {DonationList.map(level => (
                    <DonationCard key={level.Id}
                                  level={level.Name}
                                  price={level.Price}
                                  people={level.People}
                                  icon={level.Icon}/>
                ))}
                
            </Flex>
        </Flex>
    )
}