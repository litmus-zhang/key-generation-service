import { Inter } from "next/font/google";
import {
  Avatar,
  Badge,
  Button,
  Table,
  Thead,
  Tbody,
  TableContainer,
  TableCaption,
  Tr,
  Th,
  Td,
  Checkbox,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { randomBytes } from "crypto";
import { AiFillDelete, AiFillEdit, AiFillCopy } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });
const sampleDate = Date.now();

const RowItem = (data = sampleDate) => {
  return (
    <Tr>
      <Td>
        <Checkbox />
      </Td>
      <Td isTruncated>{randomBytes(20).toString("hex")}</Td>
      <Td>{data}</Td>
      <Td>
        <HStack>
          <IconButton
            colorScheme="red"
            size="sm"
            aria-label="delete"
            icon={<AiFillDelete />}
          />
          <IconButton
            colorScheme="green"
            size="sm"
            aria-label="update"
            icon={<AiFillEdit />}
          />
          <IconButton
            colorScheme="blue"
            size="sm"
            aria-label="copy"
            icon={<AiFillCopy />}
          />
        </HStack>
      </Td>
    </Tr>
  );
};
export default function Home() {
  const api = new Array(10).fill(1);
  return (
    <main className="p-4">
      <div className="">
        <div className="flex justify-between my-20">
          <div className="flex gap-2 items-center">
            <Avatar size="sm" />
            <p className="flex flex-col font-bold text-md">
              Litmus Zhang
              <small>
                <Badge>FREE</Badge>
              </small>
            </p>
          </div>
          <Button colorScheme="green">Create New Key</Button>
        </div>
        <TableContainer className="my-10">
          <Table>
            <TableCaption>Page 1 - 10 of 25 </TableCaption>
            <Thead>
              <Tr>
                <Th>
                  <Checkbox />
                </Th>
                <Th>API Key</Th>
                <Th>Created At</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>{api.map((data) => RowItem())}</Tbody>
          </Table>
          <div className="flex justify-end gap-2 my-2">
            <Button>Previous</Button>
            <Button>Next</Button>
          </div>
        </TableContainer>
      </div>
    </main>
  );
}
