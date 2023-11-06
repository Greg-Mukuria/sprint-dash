import React from 'react';
import { Text, Link, useTheme } from '@geist-ui/react';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <footer>
        <Text>
          <Link href="https://github.com/geist-org" target="_blank" rel="noopener" underline>
            Terms
          </Link>
        </Text>
        <Text>
          <Link href="https://github.com/geist-org" target="_blank" rel="noopener" underline>
            Privacy
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
