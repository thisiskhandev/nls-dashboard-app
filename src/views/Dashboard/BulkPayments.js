import React, { useEffect, useState } from "react";
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Box,
  Input,
  Heading,
  Select,
  Image,
  VStack,
} from "@chakra-ui/react";
import UsersRow from "components/Tables/UsersRow";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import LoadingGif from "assets/svg/loading-infinite.svg";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import {
  AlertUnauthorized,
  AlertDataNotFound,
} from "theme/components/AlertDialog";
import UploadCSVModal from "theme/components/UploadCSVModal";
import sampleCSVFile from "../../assets/sheets/samplefile.csv";
import { getBulkPayments } from "api/ApiListing";
function BulkPayments() {
  const { search } = useLocation();
  let query = React.useMemo(() => new URLSearchParams(search), [search]);
  const [customers, setCustomers] = useState(null);
  const [isloading, setLoading] = useState(false);
  const [emailFilter, setEmailFilter] = useState("");
  const textColor = useColorModeValue("gray.700", "white");
  const [unauthorizedWarning, setUnauthorizedWarning] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);
  const setReloadHandler = (value) => {
    console.log(value);
    if (value === true) {
      setLoading(true);
      getBulkPayments()
        .then((res) => {
          if (res !== undefined && res.status === 200) {
            setCustomers(res.data.data);
            setLoading(false);
          } else {
            console.log(res);
          }
        })
        .catch((err) => console.log(err) && setLoading(false));
    }
  };

  // Converting date
  const datadate = (created) => {
    var formatedDateTime = new Date(created);
    formatedDateTime = formatedDateTime.toLocaleString();
    return formatedDateTime;
  };

  useEffect(() => {
    if (customers === null) {
      setLoading(true);
      getBulkPayments()
        .then((res) => {
          if (res !== undefined && res.status === 200) {
            setCustomers(res.data.data);
            setLoading(false);
          } else {
            console.log(res);
          }
        })
        .catch((err) => console.log(err) && setLoading(false));
    }
  }, []);

  // Filtering Email
  const customerListing =
    customers !== null && customers !== undefined
      ? customers.filter((customer) => {
          if (emailFilter == "") {
            return customer;
          } else if (emailFilter != "") {
            return customer.email == emailFilter ? customer : false;
          }
        })
      : null;

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {unauthorizedWarning ? <AlertUnauthorized /> : null}
      {noDataFound ? <AlertDataNotFound /> : null}
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="0 0 30px 0">
          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign={"start"}
          >
            Bulk Payments
          </Text>
        </CardHeader>
        <Box>
          <UploadCSVModal setReloadHandler={setReloadHandler} />
          <Flex mb={5} justifyContent="end">
            <a
              href={sampleCSVFile}
              download="samplefile.csv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                bg="gray.900"
                color="#fff"
                fontWeight={400}
                _hover={{ bg: "gray" }}
              >
                Download Sample File
              </Button>
            </a>
          </Flex>
        </Box>
        {!isloading ? (
          <>
            <CardBody>
              <Table
                variant="simple"
                color={textColor}
                className="customer-listing"
              >
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Job ID</Th>
                    <Th color="gray.400">Email</Th>
                    <Th color="gray.400">Status</Th>
                    <Th color="gray.400">Description</Th>
                    <Th color="gray.400">Created at</Th>
                    <Th color="gray.400">Logs</Th>
                    <Th color="gray.400">Delete Job</Th>
                  </Tr>
                </Thead>
                <Tbody className="customer_body" textTransform={"capitalize"}>
                  {customers !== null
                    ? customerListing.map((val, index) => {
                        return (
                          <UsersRow
                            key={index}
                            userid={val.id}
                            email={val.user_id.email}
                            status={val.status}
                            desc={val.description}
                            date={datadate(val.created_at)}
                            viewLog={val.status}
                            setReloadHandler={setReloadHandler}
                          />
                        );
                      })
                    : ""}
                </Tbody>
              </Table>
            </CardBody>
          </>
        ) : (
          <Flex
            justifyContent="center"
            alignItems="center"
            direction={"column"}
          >
            <Heading>Listing Payments Job...</Heading>
            <Image src={LoadingGif} w={100} />
          </Flex>
        )}
        <Box>
          <Flex
            mt={5}
            justifyContent="center"
            alignItems="center"
            direction={"column"}
          >
            <p>
              Showing {customers !== null ? customers.length : 0} of Payments
              Job
            </p>
          </Flex>
        </Box>
      </Card>
    </Flex>
  );
}

export default BulkPayments;
