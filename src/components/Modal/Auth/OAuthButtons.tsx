import { FIREBASE_ERRORS } from "@/firebase/errors";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="../images/googleLogo.png" height="20px" mr={2} />
        Continue with Google!
      </Button>
      <Button variant="oauth">Some other provider</Button>
      <Text textAlign="center" color="red">
        {error &&
          FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
    </Flex>
  );
};
export default OAuthButtons;
