import React from 'react';
import { Button, Grid, Input, useTheme } from '@geist-ui/react';
import SearchIcon from '@geist-ui/react-icons/search';
import CreateTeamIcon from '@geist-ui/react-icons/userPlus';
import ProjectCard from '@/components/project-card';

const Page = () => {
  const theme = useTheme();

  return (
    <>
      <div className="page__wrapper">
        <div className="page__content">
          <>
            <div style={{fontSize: "20px"}}>Sign In</div>
            <div>
              <form method="POST" action="dash-core-api-main.vercel.app/v1/api/auth/signin">
                <p style={{fontSize: "5px"}}>Name</p>
                <Input style={{}} placeholder="Name"><Input />
                <br />
                <br />
                <p style={{fontSize: "5px"}}>Password</p>
                <input style={{}} placeholder="Name"><input />
                <br />
                <br />
                <p style={{fontSize: "5px"}}>Agree to the terms?</p>
                <button type="submit" style={{border: "1px solid white", }}>Submit<button />
              </form>
            </div>
          </>
        </div>
      </div>
      <style jsx>{`
        .page__wrapper {
          background-color: ${theme.palette.accents_1};
          min-height: calc(100vh - 172px);
        }
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: calc(${theme.layout.unit} * 2) ${theme.layout.pageMargin};
          box-sizing: border-box;
        }
        .actions-stack {
          display: flex;
          width: 100%;
        }
        .actions-stack :global(.input-wrapper) {
          background-color: ${theme.palette.background};
        }
        .actions-stack :global(input) {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};
export default Page;
