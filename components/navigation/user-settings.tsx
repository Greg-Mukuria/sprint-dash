import React from 'react';
import { Popover, Link } from '@geist-ui/react';

const UserSettings: React.FC = () => (
  <>
    <Popover.Item title>
      <span>Client Settings</span>
    </Popover.Item>
    <Popover.Item>
      <Link href="#">Your Teams</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/adapters">Your Adapters</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/activity">Your Activity</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/security">Security</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/api">API</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/blog">Blog</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/status">System Status</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/contact">Contact Us</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="/billing">Billing & Services</Link>
    </Popover.Item>
    <Popover.Item>
      <Link href="https://github.com/ofekashery/react-dashboard-design">GitHub</Link>
    </Popover.Item>
    <Popover.Item line />
    <Popover.Item>
      <Link href="/register">Logout</Link>
    </Popover.Item>
  </>
);

export default UserSettings;
