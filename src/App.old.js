import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Popper,
  Fade,
  Box,
  Button,
  CardContent,
  Card,
  TextField,
  Select,
  MenuItem,
  Popover
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
export default function App() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const [personName, setPersonName] = React.useState([]);
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const theme = useTheme();
  return (
    <Grid container justifyContent="center" sx={{ p: 3 }} flexDirection="column" >
      <Grid item md={6} sx={{ border: "1px solid black" }}>
        {/* <FormControl variant="standard" fullWidth aria-describedby={id}>
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          variant="filled"
          
          endAdornment={
            <InputAdornment position="start"   onClick={handleClick}>
              <TuneIcon />
            </InputAdornment>
          }
        />
      </FormControl> */}
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Button aria-describedby={id} onClick={handleClick}>
            <TuneIcon />
          </Button>
        </Box>
        
      </Grid>
      <Grid md={6} sx={{border:"1px solid blue"}}>

        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="bottom-end"
         
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350} size="" >
              <Box sx={{ bgcolor: "background.paper" }}>
                <Card>
                  <CardContent>
                    <Grid container item md={12} spacing={1}  >
                      <Grid item md={12}>
                        <TextField label="Text in title" fullWidth />
                      </Grid>
                      <Grid item md={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-multiple-name-label">
                            Status (multi select)
                          </InputLabel>
                          <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            fullWidth
                            // input={<OutlinedInput label="Name" />}
                            // MenuProps={MenuProps}
                          >
                            {names.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                // style={getStyles(name, personName, theme)}
                              >
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Fade>
          )}
        </Popper>
        </Grid>
    </Grid>
  );
}
