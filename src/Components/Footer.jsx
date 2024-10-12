import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#000212",
  color: "#fff",
  padding: "5rem 10rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 1rem",
    flexDirection: "column",
  },
  [theme.breakpoints.down("md")]: {
    padding: "5rem 2rem",
  },
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "150px",
  marginBottom: "1.5rem",
}));

const FooterHeading = styled(Typography)({
  fontWeight: 700,
  marginBottom: "1.5rem",
  fontSize: "1.1rem",
});

const FooterLink = styled(Link)({
  color: "#fff",
  fontWeight: 300,
  marginBottom: "0.5rem",
  fontSize: "15px",
  textDecoration: "none",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#909196",
  },
});

const FooterBottom = styled(Box)(({ theme }) => ({
  color: "#fff",
  textAlign: "center",
  marginTop: "3rem",
  fontSize: "14px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem",
  },
}));

const SocialIcons = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterColumn>
          <Typography
            sx={{ fontSize: "35px", fontWeight: 600 }}
            data-aos="fade-up"
          >
            STRATUS
          </Typography>
        </FooterColumn>

        <FooterColumn data-aos="fade-up">
          <FooterHeading data-aos="fade-up">Product</FooterHeading>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Download</FooterLink>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">Integrations</FooterLink>
          <FooterLink href="#">Changelog</FooterLink>
          <FooterLink href="#">Docs</FooterLink>
        </FooterColumn>

        <FooterColumn data-aos="fade-up">
          <FooterHeading data-aos="fade-up">Company</FooterHeading>
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Customers</FooterLink>
          <FooterLink href="#">Brand</FooterLink>
        </FooterColumn>

        <FooterColumn data-aos="fade-up">
          <FooterHeading data-aos="fade-up">Resources</FooterHeading>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Community</FooterLink>
          <FooterLink href="#">DPA</FooterLink>
          <FooterLink href="#">Terms of service</FooterLink>
          <FooterLink href="#">Report issues</FooterLink>
        </FooterColumn>

        <FooterColumn data-aos="fade-up">
          <FooterHeading data-aos="fade-up">Developers</FooterHeading>
          <FooterLink href="#">API</FooterLink>
          <FooterLink href="#">Status</FooterLink>
          <FooterLink href="#">GitHub</FooterLink>
        </FooterColumn>

        <FooterBottom>
          <SocialIcons>
            <IconButton>
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <YouTubeIcon sx={{ color: "white" }} />
            </IconButton>
          </SocialIcons>
          <Typography>
            Copyright © 2024 Stratus | Designed and Developed by Hari Hara
          </Typography>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
