import { useTheme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const TransitionsModal = ({ open, handleCloseModal, selectedMovie }) => (
  <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={open}>
        <div
          style={{
            backgroundColor: useTheme().palette.background.paper,
            border: "2px solid #000",
            boxShadow: useTheme().shadows[5],
            padding: useTheme().spacing(2, 4, 3),
            display: "flex",
            width: "500px",
          }}
        >
          <img
            alt="Poster Path"
            src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
            style={{ margin: "10px" }}
            width="250"
          />
          <div>
            <h2 id="transition-modal-title">{selectedMovie.title}</h2>
            <p id="transition-modal-description">{selectedMovie.overview}</p>
          </div>
        </div>
      </Fade>
    </Modal>
  </div>
);

export default TransitionsModal;
