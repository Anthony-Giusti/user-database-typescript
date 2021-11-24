"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Check_1 = __importDefault(require("@material-ui/icons/Check"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var styles_1 = require("@material-ui/core/styles");
var Styles_1 = __importDefault(require("./Styles"));
var UserForm_1 = __importDefault(require("../UserForm/UserForm"));
var EditModal = function (_a) {
    var editModalOpen = _a.editModalOpen, closeEditModal = _a.closeEditModal, selectedUser = _a.selectedUser;
    var _b = react_1.useState(false), isEdited = _b[0], setIsEdited = _b[1];
    var _c = react_1.useState(false), editModalConfirmOpen = _c[0], setEditModalConfirmOpen = _c[1];
    // const ref = useRef(document.createElement('form'));
    var ref = react_1.useRef(null);
    var classes = Styles_1.default();
    var theme = styles_1.useTheme();
    var mdDevice = useMediaQuery_1.default(theme.breakpoints.up('md'));
    var discardEdits = function () {
        setEditModalConfirmOpen(false);
        setIsEdited(false);
        closeEditModal('discard', null);
    };
    var cancelEdits = function () {
        setEditModalConfirmOpen(false);
    };
    var handleModalClose = function () {
        if (isEdited) {
            setEditModalConfirmOpen(true);
        }
        else {
            closeEditModal('discard', null);
        }
    };
    var editMade = function () {
        if (!isEdited) {
            setIsEdited(true);
        }
    };
    var handleSubmit = function (editedUser) {
        setEditModalConfirmOpen(false);
        setIsEdited(false);
        closeEditModal('submit', editedUser);
    };
    return (<>
      <Dialog_1.default open={editModalOpen} onClose={handleModalClose} fullWidth>
        <div className={classes.title}>
          <Typography_1.default variant="h2">Edit User</Typography_1.default>
          <Typography_1.default gutterBottom variant="caption">
            ID: {selectedUser._id}
          </Typography_1.default>
        </div>

        <DialogContent_1.default>
          <div>
            <span className={classes.dateBox}>
              <Typography_1.default className={classes.dateTitle}>
                Date Created:
              </Typography_1.default>
              <Typography_1.default className={classes.date}>
                {selectedUser.created}
              </Typography_1.default>
            </span>
            <Divider_1.default />
            <span className={classes.dateBox}>
              <Typography_1.default className={classes.dateTitle}>
                Last Edited:
              </Typography_1.default>
              <Typography_1.default className={classes.date}>
                {selectedUser.lastEdit}
              </Typography_1.default>
            </span>
          </div>

          <Divider_1.default />

          <UserForm_1.default submit={handleSubmit} user={selectedUser} editMade={editMade} ref={ref}/>
        </DialogContent_1.default>

        <DialogActions_1.default>
          <Button_1.default variant="contained" startIcon={<Check_1.default />} 
    // className={classes.negitiveBtn}
    color="primary" onClick={function () { return ref.current.sendForm(); }} disabled={!isEdited}>
            Confirm Edits
          </Button_1.default>
          <Button_1.default 
    // className={classes.negitiveBtn}
    onClick={function () { return closeEditModal('discard', null); }}>
            Cancel
          </Button_1.default>
        </DialogActions_1.default>
      </Dialog_1.default>

      <Dialog_1.default open={editModalConfirmOpen}>
        <DialogContent_1.default>
          <Typography_1.default>Confirm edits before closing beep?</Typography_1.default>
          <DialogActions_1.default disableSpacing={!mdDevice} className={classes.confirmDialogBtnsContainer}>
            <Button_1.default className={classes.confirmDialogBtn} variant="contained" startIcon={<Check_1.default />} color="primary" onClick={ref.current.sendForm()}>
              Confirm Edits
            </Button_1.default>
            <Button_1.default className={classes.confirmDialogBtn} variant="contained" startIcon={<Delete_1.default />} color="secondary" onClick={discardEdits}>
              Discard Edits
            </Button_1.default>
            <Button_1.default className={classes.confirmDialogBtn} onClick={cancelEdits}>
              Cancel
            </Button_1.default>
          </DialogActions_1.default>
        </DialogContent_1.default>
      </Dialog_1.default>
    </>);
};
exports.default = EditModal;
//# sourceMappingURL=EditModal.jsx.map