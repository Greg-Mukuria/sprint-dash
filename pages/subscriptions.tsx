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
          <div className="actions-stack">
            <h1 className="text-2xl">Subscription</h1>
            <Button auto type="secondary" marginLeft={1}>
              New Subscription
            </Button>
            <Button iconRight={<CreateTeamIcon />} marginLeft={1} px={0} width="48px" />
          </div>
          <Grid.Container gap={2} marginTop={1} justify="flex-start">
            <Grid xs={24} sm={12} md={8}>
              <ProjectCard
                projectId="7uwLI9"
                framework="next"
                git={{
                  repo: '$ 56.43',
                  commitMessage: 'EU-Zone-DeFault'
                }}
                updatedAt="4m"
              />
            </Grid>
          </Grid.Container>
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
