import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

function Header({darkMode, handleThemeChange}: Props) {
  return (
    <AppBar position="static" sx={{backgroundColor: '#009996', mb: 4} }>
        <Toolbar>
            <Typography variant="h6">Alrx's Programming Store</Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}/>
        </Toolbar>
    </AppBar>
  )
}

export default Header