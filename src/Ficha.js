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
      <Link color="inherit" href="https://maschion.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Ficha() {
  return (
    <form name="form-camisas" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="form-camisas" />
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

            <Grid container spacing={1}>
              <Grid item xs={12} sm={64}>
                <TextField
                  required
                  fullWidth
                  id="Nome"
                  label="Nome"
                  name="nome"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Sobrenome"
                  label="Sobrenome"
                  name="sobrenome"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
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
                  name="colarinho"
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
                  name="ombro"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Pala"
                  label="Pala"
                  name="pala"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Circunferência Torax (Peito)"
                  label="Circunferência Torax (Peito)"
                  name="circunferenciaTorax"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Circunferência Cintura (Abdômen/Barriga"
                  label="Circunferência Cintura (Abdômen/Barriga"
                  name="circunferenciaCintura"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Quadril"
                  label="Quadril"
                  name="quadril"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Comprimento Total"
                  label="Comprimento Total"
                  name="comprimentoTotal"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Altura do botão (pescoço até seio - feminino)"
                  label="Altura do botão (pescoço até seio - feminino)"
                  name="alturaBotao"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Bíceps"
                  label="Bíceps"
                  name="biceps"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Antebraço"
                  label="Antebraço"
                  name="antebraço"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Comprimento Manga"
                  label="Comprimento Manga"
                  name="comprimentoManga"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Punho Direito"
                  label="Punho Direito"
                  name="punhoDireito"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Punho Esquerdo"
                  label="Punho Esquerdo"
                  name="punhoEsquerdo"
                />
              </Grid>
              <Acrescimo />

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Altura do cotovelo"
                  label="Altura do cotovelo"
                  name="alturaCotovelo"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Altura do corpo"
                  label="Altura do corpo"
                  name="alturaCorpo"
                />
              </Grid>
              <Acrescimo />
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Entrecavas"
                  label="Entrecavas"
                  name="entrecavas"
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
                <FormControlLabel label="Dois Bolsos" control={<Checkbox />} />
              </Grid>

              <Grid item xs={4}>
                <FormControlLabel
                  label="Punho Simples"
                  control={<Checkbox />}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel label="Punho Duplo" control={<Checkbox />} />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  label="Punho SImples para abotoadura"
                  control={<Checkbox />}
                />
              </Grid>

              <Grid item xs={4}>
                <FormControlLabel label="Manga Curta" control={<Checkbox />} />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel label="Manga Longa" control={<Checkbox />} />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel label="Manga 3/4" control={<Checkbox />} />
              </Grid>

              <Grid item xs={4}>
                <FormControlLabel label="Vista Macho" control={<Checkbox />} />
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

          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </form>
  );
}
