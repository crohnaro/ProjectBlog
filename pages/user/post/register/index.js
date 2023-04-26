import { Box, Container, FormControl, Input, InputLabel, FormHelperText } from '@mui/material';
import TemplateDefault from '../../../../src/templates/Default'

const UserPostRegister = () => {
  return (
    <>
      <TemplateDefault>
        <form>
          <Container>
            <Box>
              <FormControl fullWidth>
                <InputLabel>Titulo do Anúncio</InputLabel>
                <Input
                  name="title"
                  value=""
                />
                <FormHelperText>
                  error
                </FormHelperText>
              </FormControl>
            </Box>
          </Container>
        </form>
      </TemplateDefault>
    </>
  );
}

export default UserPostRegister