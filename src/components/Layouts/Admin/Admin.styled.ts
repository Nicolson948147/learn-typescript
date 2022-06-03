import { createTheme } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #E7EBF0;
`;

const loginTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h5: {
          color: '#1976d2',
        },
      },
    },
  },
});

export {
  Container,
  Header,
  loginTheme,
};
