import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import '@mantine/charts/styles.css';

// import { BarChart } from '@mantine/charts';
// import { data } from './data';

export default function App() {
  return <MantineProvider theme={theme}>
    <BaseShell />
    </MantineProvider>;
}

import { AppShell, Burger, Group, Skeleton, NavLink, Tabs, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { AreaChart } from '@mantine/charts';

export function BaseShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        <NavLink label="Home" active={true} />
        <NavLink label="Vehicles" active={false} onClick={() => console.log('clicked')}/>
        <NavLink label="Drivers" active={false} />
        <NavLink label="Contracts" active={false} />
        <NavLink label="Reports" active={false} />
        {/* {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))} */}
      </AppShell.Navbar>
      <AppShell.Main>
        <Tabz />
      </AppShell.Main>
    </AppShell>
  );
}

function Tabz() {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <Tabs color="teal" defaultValue="Home">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
      <Bars/>
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  )
}

function vehiclesView() {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <Tabs color="teal" defaultValue="Home">
      <Tabs.List>
        <Tabs.Tab value="fleet" leftSection={<IconPhoto style={iconStyle} />}>
          Fleet
        </Tabs.Tab>
        <Tabs.Tab value="Trips" leftSection={<IconMessageCircle style={iconStyle} />}>
          Trips
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Logs
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        List of all vehicles
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Fleet
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  )}

  
  function Bars() {
    return (
      <AreaChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: 'Apples', color: 'indigo.6' },
          { name: 'Oranges', color: 'blue.6' },
          { name: 'Tomatoes', color: 'teal.6' },
        ]}
        curveType="linear"
      />
    );
  }

  export const data = [
    {
      date: 'Mar 22',
      Apples: 2890,
      Oranges: 2338,
      Tomatoes: 2452,
    },
    {
      date: 'Mar 23',
      Apples: 2756,
      Oranges: 2103,
      Tomatoes: 2402,
    },
    {
      date: 'Mar 24',
      Apples: 3322,
      Oranges: 986,
      Tomatoes: 1821,
    },
    {
      date: 'Mar 25',
      Apples: 3470,
      Oranges: 2108,
      Tomatoes: 2809,
    },
    {
      date: 'Mar 26',
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  ];