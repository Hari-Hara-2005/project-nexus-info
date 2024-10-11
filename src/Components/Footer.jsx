import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#0F1642", // Dark background color
  color: "#fff", // Text color white
  padding: "2rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap", // Allows wrapping for responsiveness
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem 1rem",
  },
}));

const FooterColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "150px", // Ensures some minimum width for columns
  marginBottom: "1.5rem",
}));

const FooterHeading = styled(Typography)({
  fontWeight: 600,
  marginBottom: "1rem",
});

const FooterLink = styled(Link)({
  color: "#fff", // Link color white
  marginBottom: "0.5rem",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline", // Hover effect
  },
});

const FooterBottom = styled(Box)({
  textAlign: "center",
  marginTop: "2rem",
  fontSize: "14px",
  width: "100%", // Ensures full width at bottom
});

const SocialIcons = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "2rem",
});

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterColumn>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            STRATUS
          </Typography>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Product</FooterHeading>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Download</FooterLink>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">Integrations</FooterLink>
          <FooterLink href="#">Changelog</FooterLink>
          <FooterLink href="#">Docs</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Customers</FooterLink>
          <FooterLink href="#">Brand</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Resources</FooterHeading>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Community</FooterLink>
          <FooterLink href="#">DPA</FooterLink>
          <FooterLink href="#">Terms of service</FooterLink>
          <FooterLink href="#">Report issues</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Developers</FooterHeading>
          <FooterLink href="#">API</FooterLink>
          <FooterLink href="#">Status</FooterLink>
          <FooterLink href="#">GitHub</FooterLink>
        </FooterColumn>
      </FooterContainer>

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

      <FooterBottom>
        <Typography>
          Copyright © 2024 Stratus | Powered by Stratus theme
        </Typography>
      </FooterBottom>
    </>
  );
};

export default Footer;
