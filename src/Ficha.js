import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CheckroomOutlined from "@mui/icons-material/CheckroomOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Acrescimo from "./Acrescimo";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <form name="formFichaMaschion" method="POST" data-netlify="true">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
              <CheckroomOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Ficha Maschion
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={64}>
                  <TextField
                    autoComplete="given-name"
                    name="Nome"
                    required
                    fullWidth
                    id="Nome"
                    label="Nome"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Sobrenome"
                    label="Sobrenome"
                    name="Sobrenome"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="telefone"
                    label="Telefone"
                    type="telefone"
                    id="telefone"
                    placeholder="(xx) xxxxx-xxx"
                  />
                  <hr style={{ margin: "40px" }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Colarinho"
                    label="Colarinho"
                    name="Colarinho"
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <FormControlLabel label="01" control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel label="010" control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel label="015" control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel label="02" control={<Checkbox />} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Ombro"
                    label="Ombro"
                    name="Ombro"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Pala"
                    label="Pala"
                    name="Pala"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Circunferência Torax (Peito)"
                    label="Circunferência Torax (Peito)"
                    name="Circunferência Torax (Peito)"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Circunferência Cintura (Abdômen/Barriga"
                    label="Circunferência Cintura (Abdômen/Barriga"
                    name="Circunferência Cintura (Abdômen/Barriga"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Quadril"
                    label="Quadril"
                    name="Quadril"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Comprimento Total"
                    label="Comprimento Total"
                    name="Comprimento Total"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Altura do botão (pescoço até seio - feminino)"
                    label="Altura do botão (pescoço até seio - feminino)"
                    name="Altura do botão (pescoço até seio - feminino)"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Bíceps"
                    label="Bíceps"
                    name="Bíceps"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Antebraço"
                    label="Antebraço"
                    name="Antebraço"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Comprimento Manga"
                    label="Comprimento Manga"
                    name="Comprimento Manga"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Punho Direito"
                    label="Punho Direito"
                    name="Punho Direito"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Punho Esquerdo"
                    label="Punho Esquerdo"
                    name="Punho Esquerdo"
                  />
                </Grid>
                <Acrescimo />

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Altura do cotovelo"
                    label="Altura do cotovelo"
                    name="Altura do cotovelo"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Altura do corpo"
                    label="Altura do corpo"
                    name="Altura do corpo"
                  />
                </Grid>
                <Acrescimo />
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Entrecavas"
                    label="Entrecavas"
                    name="Entrecavas"
                  />
                </Grid>
                <Acrescimo />

                <Grid item xs={4}>
                  <FormControlLabel label="Sem Bolso" control={<Checkbox />} />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel label="Com Bolso" control={<Checkbox />} />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    label="Dois Bolsos"
                    control={<Checkbox />}
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControlLabel
                    label="Punho Simples"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    label="Punho Duplo"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    label="Punho SImples para abotoadura"
                    control={<Checkbox />}
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControlLabel
                    label="Manga Curta"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    label="Manga Longa"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel label="Manga 3/4" control={<Checkbox />} />
                </Grid>

                <Grid item xs={4}>
                  <FormControlLabel
                    label="Vista Macho"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel label="Vista Lisa" control={<Checkbox />} />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    label="Vista Embutida"
                    control={<Checkbox />}
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControlLabel
                    label="Vista Embutida"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    label="Vista Embutida"
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    label="Vista Embutida"
                    control={<Checkbox />}
                  />
                </Grid>
              </Grid>

              <TextareaAutosize
                placeholder="Obs"
                style={{ width: 600, height: "100px" }}
              />
              <div data-netlify-recaptcha="true"></div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </form>
  );
}
