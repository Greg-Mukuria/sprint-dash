import React from 'react';
import { Text, Link, useTheme } from '@geist-ui/react';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <footer>
        <Text>
          <Link style={{paddingLeft: "6px", paddingRight: "6px"}} href="https://github.com/geist-org" target="_blank" rel="noopener" underline>
            Privacy
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px"}} href="https://github.com/geist-org" target="_blank" rel="noopener" underline>
            Security
          </Link>
          <Link style={{paddingLeft: "6px", paddingRight: "6px"}} href="https://github.com/geist-org" target="_blank" rel="noopener" underline>
            Terms
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
