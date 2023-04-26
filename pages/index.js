import { useTheme } from "@mui/material/styles";
import TemplateDefault from "../src/templates/Default";
import { Container, Grid, Typography } from "@mui/material";
import MainPost from "app/src/components/MainPost/MainPost";
import FeaturedPost from "app/src/components/FeaturedPost/FeaturedPost";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <TemplateDefault>
        <Container>
          <Typography component="h1" variant="h3" color="secondary" align="center" padding="5%">
            Feed
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <MainPost 
          image="https://picsum.photos/200/300"
          imageText="Tester"
          title="Test Title"
          description="Test Description"
          linkText="Entre aqui"
          />
        </Container>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <FeaturedPost 
                data="10/05/2022"
                description="Descrição"
                title="Titulo"
                image="https://picsum.photos/200/300"
              />
            </Grid>
            <Grid item xs={12} sm={6}  >
              <FeaturedPost 
                data="10/05/2022"
                description="Descrição"
                title="Titulo"
                image="https://picsum.photos/200/300"
              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <FeaturedPost 
                data="10/05/2022"
                description="Descrição"
                title="Titulo"
                image="https://picsum.photos/200/300"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FeaturedPost 
                data="10/05/2022"
                description="Descrição"
                title="Titulo"
                image="https://picsum.photos/200/300"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FeaturedPost 
                data="10/05/2022"
                description="Descrição"
                title="Titulo"
                image="https://picsum.photos/200/300"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FeaturedPost 
                data="10/05/2022"
                description="Descrição"
                title="Titulo"
                image="https://picsum.photos/200/300"
              />
            </Grid>
          </Grid>
        </Container>
      </TemplateDefault>
    </>
  );
}
