import { Container, Group, Paper, Text, useMantineColorScheme, ActionIcon, Center, Title, Space } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const myAge = (new Date(Date.now() - (new Date('04/30/2004')).getTime())).getUTCFullYear() - 1970;

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <div className='background-shadow'>
        <div className='background' />
      </div>
      <div style={{flex: 1}}>
        <Container className='sticky-top-right'>
          <Container px='sm' py='sm'>
            <ActionIcon
              variant='default'
              onClick={() => toggleColorScheme()}
              title='toggle color scheme'
              size={32}
              >
                {dark ? <Sun size={32} /> : <MoonStars size={32} />}
            </ActionIcon>
          </Container>
        </Container>
        <Container py='lg' size='sm'>
          <Center>
            <Title style={{ fontSize: 48, textAlign: 'center' }}>Hello <Text variant='gradient' inherit component="span">World</Text>!</Title>
          </Center>
        </Container>
        <Container size='sm'>
          <Title order={3} style={{fontWeight: 600}}>I&apos;m Alexey, a {myAge} year old <Text variant='gradient' inherit component="span">Software Developer</Text> from Switzerland.</Title>
        </Container>
        <Container py='lg' size='sm'>
          <Group grow position='center' spacing='lg' direction='column'>
            <Paper shadow="lg" p="md" withBorder sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              minWidth: 400
            })}>
              <Title order={2}><Text variant='link' inherit component="a" href='https://github.com/32byte'>Github</Text></Title>
              <Space h='sm' />
              <Text>
                Check out my github page!
                All of my projects are uploaded there.
              </Text>
            </Paper>
            <Paper shadow="lg" p="md" withBorder sx={(theme) => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              minWidth: 400
            })}>
              <Title order={2}><Text variant='link' inherit component="a" href='/blogs'>Blogs</Text></Title>
              <Space h='sm' />
              <Text>
                I occasionally write blog posts, check them out here!
              </Text>
            </Paper>
          </Group>
        </Container>
      </div>
      <div className='footer'>
        <Title order={3} style={{fontWeight: 300}}>© {(new Date()).getFullYear()} Alexey Lebedenko. All rights reserved.</Title>
      </div>
    </div>
  )
}

export default Home
