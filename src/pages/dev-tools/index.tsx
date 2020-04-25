import * as React from 'react';
import styled from 'styled-components';
import { TitleComponent } from '../../components/title.component';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props['align-center'] ? 'center' : 'flex-start'};
`;

const Aside = styled.aside`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 330px;
  background-color: #F3F3F3;
`;

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  padding: 0;
  box-sizing: border-box;
  margin: 0;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 8px 8px 8px 32px;
  font-family: "Roboto", sans-serif;
  color: gray;
  cursor: pointer;
  &:hover {background-color: #DDDDDD;}
`;

const ListTitle = styled.span`
  padding: 16px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function ListComponent({ group, setComponent}) {
  return (
    <List>
      <ListTitle>{group.title}</ListTitle>
      {group.components.map((c) => ListItemComponent({ item: c, setComponent}))}
    </List>
  );
}

function ListItemComponent({ item, setComponent }) {
  return (<ListItem onClick={() => setComponent(item.component)}>{item.title}</ListItem>);
}

const DevToolsPage: React.FunctionComponent = () => {
  const [component, setComponent] = React.useState(null);
  return (
    <Wrapper>
      <Row align-center>
        <Aside>{DATA.map((g) => ListComponent({ group: g, setComponent}))}</Aside>
        <Center>{component}</Center>
      </Row>
    </Wrapper>
  );
};

export default DevToolsPage;

const DATA: IComponentsGroup[] = [
  {
    title: 'Typography',
    components: [
      { title: 'Title', component: (<TitleComponent>Test text</TitleComponent>)},
      { title: 'Button', component: (<Button>Test</Button>)},
    ],
  },
];

interface IComponentsGroup {
  title: string;
  components: IComponent[];

}

interface IComponent {
  title: string;
  component: React.ReactElement | null;
}
