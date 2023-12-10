import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="md:text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Deskstop</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQS</Link>
          </FooterList>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Welcome to Ethio-Electronics, your source for cutting-edge
              electronic products. We are dedicated to providing quality gadgets
              and seamless shopping experiences. Explore our range of
              smartphones, laptops, audio gear, and smart home solutions, and
              join us in enhancing your digital lifestyle. Your satisfaction is
              our priority.
            </p>
            <p>
              &copy;{new Date().getFullYear()} Ethio-Shop. All rights reserved
            </p>
          </div>
          <FooterList>
            <h1 className="text-base font-bold mb-2">Follow Us</h1>
            <div className="flex gap-2">
              <MdFacebook size={24} />
              <AiFillTwitterCircle size={24} />
              <AiFillInstagram size={24} />
              <AiFillYoutube size={24} />
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
