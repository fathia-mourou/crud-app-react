import React,{useContext,useEffect} from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { UserContext } from "../context/user";


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {user,logout} = useContext(UserContext)

    const menuItems = [
        "Home",
        "Subscriptions",
        "contact",
    ];
    return (
        <div>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link color="foreground" href="/" aria-current="page">
                            <img src="../CoZi-Logo.webp" alt="logo-cozi" width="150px" />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {!!user&& <NavbarItem>
                        <Link color="foreground" href="/dashboard" aria-current="page">
                            Dashboard
                        </Link>
                    </NavbarItem> }
                    <NavbarItem>
                        <Link color="foreground" href="/subscriptions" >
                            Subscriptions
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/contact">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                {user==null && 
                                <NavbarContent justify="end">
                                <NavbarItem className="hidden lg:flex">
                                    <Link href="/login">Login</Link>
                                </NavbarItem>
                                <NavbarItem>
                                <Link href="/register">
                                    <Button color="secondary" href="#" variant="flat">
                                        Sign Up
                                    </Button>
                                    </Link>
                                </NavbarItem>
                            </NavbarContent>
                }
                {
                    !!user && 
                    <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Button color="secondary" href="#" variant="flat" onClick={e=>{
                            e.preventDefault()
                            logout()
                        }}>Logout</Button>
                    </NavbarItem>
                    </NavbarContent>


                }
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}

export default NavBar;