import { useSession, signIn, signOut } from "next-auth/react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import DataVisualiser from "@/components/DataVisualiser";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Flex alignItems="center" height="100vh" justifyContent="center">
      <Card align="center" textAlign="center">
        <CardHeader>
          {session ? (
            <Text>Signed in as {session.user.email} </Text>
          ) : (
            <Text>Sign in to view data</Text>
          )}
        </CardHeader>
        <CardBody>
          {session ? (
          <>
            <DataVisualiser/>
            <Button onClick={() => signOut()}>Sign out</Button>
          </>
          ) : (
            <Button onClick={() => signIn()}>Sign in</Button>
          )}
        </CardBody>
      </Card>
    </Flex>
  );
}
