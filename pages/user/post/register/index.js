import { Box, Container, FormControl, FormHelperText, TextField, Typography, Button } from '@mui/material';
import TemplateDefault from '../../../../src/templates/Default'
import { styled } from '@mui/material/styles';

import styles from '../../../../styles/Register.module.css'

const UserPostRegister = () => {

  const CssTextField = styled(TextField)({
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });

  const ColorButton = styled(Button)({
    color: 'white',
  });
  return (
    <>
      <TemplateDefault>
        <form>
          <Container maxWidth ="md" className={styles.container}>
            <Box>
              <Typography component='h1' variant='h3' align='center'color='secondary' margin="100px 0 100px 0">Criação do Anúncio</Typography>
            </Box>
            <Box>
              <FormControl fullWidth>
                <CssTextField
                  name="title"
                  label="Titulo do Anúncio"
                  id='custom-css-outlined-input'
                />
                <FormHelperText>
                  error
                </FormHelperText>
                <CssTextField
                  name="title"
                  label="Descrição"
                  multiline
                  rows={6}
                  id='custom-css-outlined-input'
                />
                <FormHelperText>
                  error
                </FormHelperText>
              </FormControl>
              <ColorButton size='large' variant='contained'>CRIAR ANÚNCIO</ColorButton>
            </Box>
          </Container>
        </form>
      </TemplateDefault>
    </>
  );
}

export default UserPostRegister