import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { borders } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // height: 200,
  bgcolor: "white",
  border: "3px solid #fcecdd",
  boxShadow: 24,
  p: 4,
  color: "black"
};
function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{ color: "#ff6701" }}
        className="bot-links"
        onClick={handleOpen}
      >
        Learn More
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="popup-top">
          <div>
            <Typography
              style={{ fontSize: "2 rem" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {props.name}
            </Typography>
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.desc}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.time}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// grid below here doesnt work
export default function CardOutline(props) {
  return (
    <Card className="card-whole" sx={{ minWidth: 275 }}>
      <div className="card-top">
        <CardContent>
          <Typography
            sx={
              ({ fontFamily: "Red Hat Mono", color: "black" },
              { marginTop: "50px" })
            }
            variant="h5"
            component="div"
          >
            {props.name}
          </Typography>
          <br />
          <Typography
            className="creator"
            sx={({ fontSize: 14 }, { color: "black" })}
            gutterBottom
          >
            Created by {props.creator}
          </Typography>
          <hr />
          <br />
        </CardContent>
      </div>

      {/* <Typography sx={({ mb: 1.5 }, { paddingX: 2 })} color="text.secondary">
          {props.desc}
        </Typography> */}
      <div className="interest-text">
        <Typography color="text.secondary">{props.userInterest}</Typography>
      </div>
      <CardActions className="link-text">
        <Button style={{ color: "#ff6701" }} className="text-btn" size="small">
          <BasicModal
            name={props.name}
            desc={props.desc}
            userInterest={props.userInterest}
            time={props.time}
            creator={props.creator}
          />
        </Button>
        <Button style={{ color: "#ff6701" }} className="bot-links">
          JOIN
        </Button>
      </CardActions>
    </Card>
  );
}
