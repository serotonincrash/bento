import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Button, Text } from '@mantine/core';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Text>
          You're logged in!
        </Text>
        <Text>
          Your thing is {session.user.email}
        </Text>
        <Button variant='filled' onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    )
  } else {
    return (
      <>
        <Welcome />
        <ColorSchemeToggle />
        <Button variant='filled' onClick={() => signIn()}>
          Sign in
        </Button>
      </>
    );
  }
}
