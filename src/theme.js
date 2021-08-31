import { createTheme } from "@material-ui/core/styles";

// const StyledButton = styled(Button)(`
//   text-transform: none;
// `);

// const theme2 = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: "none",
//         },
//       },
//     },
//   },
// });

// const defaultTheme = createTheme();

export const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontSize: 14,
      label: "#fff",
    },
    fontFamily: ["Hero", "Comic Sans", "Helvetica", "sans-serif"].join(","),
    fontSize: 14,
  },
});

export default theme;
