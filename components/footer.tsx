import React from 'react';
import { Text, Link, useTheme } from '@geist-ui/react';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <footer>
        <Text>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/privacy" target="_blank" rel="noopener" underline>
            Privacy
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/activity" target="_blank" rel="noopener" underline>
            Activity
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/security" target="_blank" rel="noopener" underline>
            Security
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/terms" target="_blank" rel="noopener" underline>
            Terms
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/status" target="_blank" rel="noopener" underline>
            Status
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/docs" target="_blank" rel="noopener" underline>
            Docs
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/contact" target="_blank" rel="noopener" underline>
            Contact
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/pricing" target="_blank" rel="noopener" underline>
            Pricing
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/api" target="_blank" rel="noopener" underline>
            API
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/traders-trust-policy" target="_blank" rel="noopener" underline>
            Traders Trust Policy
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/blog" target="_blank" rel="noopener" underline>
            Blog
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/about" target="_blank" rel="noopener" underline>
            About
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px", fontSize: "14px", color: "blue"}} href="/referrals" target="_blank" rel="noopener" underline>
            Referrals
          </Link>
        </Text>
      </footer>
      <style jsx>{`
        footer {
          border-top: 1px solid ${theme.palette.border};
          padding: ${theme.layout.gapQuarter} ${theme.layout.gap};
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
