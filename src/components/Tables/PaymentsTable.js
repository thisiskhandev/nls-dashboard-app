import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import Payment from "../../views/Dashboard/SinglePayment";

function TablesTableRow(props) {
  const { amount, status, desc, customer, date, viewprofile, cusid } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  function setStatus(originalstatus) {
    var status = originalstatus;
    if (status === "Succeeded") {
      return (
        <Text
          fontSize="sm"
          fontWeight="bold"
          textTransform="capitalize"
          color={"green.300"}
        >
          {status}
        </Text>
      );
    } else if (status === "Refunded" || status === "Partial Refunded") {
      return (
        <Text
          fontSize="sm"
          fontWeight="bold"
          textTransform="capitalize"
          color={"primaryColor"}
        >
          {status}
        </Text>
      );
    } else {
      return (
        <Text
          fontSize="sm"
          fontWeight="bold"
          textTransform="capitalize"
          color={"black.300"}
        >
          {status}
        </Text>
      );
    }
  }
  return (
    <Tr payment-data={cusid}>
      <Td minWidth={{ sm: "100px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Avatar src={logo} w="50px" borderRadius="12px" me="18px" /> */}
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {amount}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td minWidth={{ sm: "100px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Avatar src={logo} w="50px" borderRadius="12px" me="18px" /> */}
          {/* {status==="Succeeded"? <Flex direction="column">
        <Text
          fontSize="sm"
          color="green.400"
          fontWeight="600"
        >
          {status}
        </Text>
      </Flex> : <Flex direction="column">
        <Text
          fontSize="sm"
          color="black.400"
          fontWeight="600"
        >
          {status}
        </Text>
      </Flex>} */}
          {setStatus(status)}
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          {/* <Text fontSize="md" color={textColor} fontWeight="bold">
              {domain}
            </Text> */}
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {desc}
          </Text>
        </Flex>
      </Td>
      <Td>
        {/* <Badge
            bg={status === "VISA" ? "blue.400" : bgStatus}
            color={status === "VISA" ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
            textAlign={"center"}
          >
            {customer}
          </Badge> */}
        <Text
          fontSize="sm"
          color="gray.400"
          fontWeight="normal"
          textTransform={"lowercase"}
        >
          {customer}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>
      <Td>
        {/* <a href={"/#/admin/detail/"+viewprofile}>View Profile</a> */}
        <NavLink to={"/admin/detail/" + viewprofile}>
          <Button p="0px" bg="transparent" variant="no-hover">
            <Text
              fontSize="md"
              fontWeight="bold"
              cursor="pointer"
              color={"primaryColor"}
            >
              View Payment
            </Text>
          </Button>
        </NavLink>
        {/* <Link to={"/payment/"+viewprofile}>View Profile</Link> */}
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
