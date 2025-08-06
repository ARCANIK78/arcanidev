"use client";
import { forwardRef } from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  LinkProps
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { IoLogoGithub } from 'react-icons/io5';
import { ReactNode } from 'react';

// Tipado para LinkItem
interface LinkItemProps extends LinkProps {
  href: string;
  path: string;
  target?: string;
  children: ReactNode;
}

// Tipado para Navbar props
interface NavbarProps {
  path: string;
}

// Enlace personalizado con estado activo
const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'teal.200' : undefined} // Cambia si usas un color personalizado
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

// MenuLink con forwardRef tipado correctamente
const MenuLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link as={NextLink} ref={ref} {...props} />
));

MenuLink.displayName = "MenuLink"; // para evitar advertencias en consola

// Navbar principal
const Navbar = ({ path }: NavbarProps) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            {/* Aquí puedes poner tu logo o nombre */}
            ArcaniDev
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>Works</LinkItem>
          <LinkItem href="https://store.craftz.dog/" path={path}>Wallpapers</LinkItem>
          <LinkItem href="/posts" path={path}>Posts</LinkItem>
          <LinkItem href="https://uses.craftz.dog/" path={path}>Uses</LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/craftzdog/craftzdog-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} alignItems="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">About</MenuItem>
                <MenuItem as={MenuLink} href="/works">Works</MenuItem>
                <MenuItem as={MenuLink} href="https://store.craftz.dog/">Wallpapers</MenuItem>
                <MenuItem as={MenuLink} href="/posts">Posts</MenuItem>
                <MenuItem as={MenuLink} href="https://uses.craftz.dog/">Uses</MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                  target="_blank"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
