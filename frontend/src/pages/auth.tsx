import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

interface Props {}

function Auth(props: Props) {
  const {} = props;

  return (
    <div className="flex flex-col items-center my-40">
      <Tabs
        className="shadow-md p-4 rounded"
        variant="soft-rounded"
        colorScheme="green"
        align="center"
        isFitted
      >
        <TabList>
          <Tab>Sign Up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form className="flex flex-col gap-2">
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button colorScheme="green">Sign up</Button>
            </form>
          </TabPanel>
          <TabPanel>
            <form className="flex flex-col gap-2">
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button colorScheme="green">Sign In</Button>
              <p>Forgot password? </p>
            </form>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Auth;
