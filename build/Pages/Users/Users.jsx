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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
require("date-fns");
var Styles_1 = __importDefault(require("./Styles"));
var User_1 = __importDefault(require("../../components/User/User"));
var EditModal_1 = __importDefault(require("../../components/EditModal/EditModal"));
var UsersHeader_1 = __importDefault(require("./UsersHeader/UsersHeader"));
var birthdayStringToDate_1 = __importDefault(require("../../components/util/functions/birthdayStringToDate"));
var Users = function (_a) {
    var userData = _a.userData, removeUser = _a.removeUser, submitEditedUser = _a.submitEditedUser, fetchUserData = _a.fetchUserData;
    var _b = react_1.useState(null), selectedUser = _b[0], setSelectedUser = _b[1];
    var _c = react_1.useState(false), editModalOpen = _c[0], setEditModalOpen = _c[1];
    var _d = react_1.useState(false), deleteDialogOpen = _d[0], setDeleteDialogOpen = _d[1];
    var _e = react_1.useState([]), sexFilter = _e[0], setSexFilter = _e[1];
    var _f = react_1.useState([]), visibleUserData = _f[0], setVisibleUserData = _f[1];
    var _g = react_1.useState({
        property: '_id',
        order: 'ascending',
    }), currentSort = _g[0], setCurrentSort = _g[1];
    var classes = Styles_1.default();
    var openEditModal = function (user) {
        setSelectedUser(user);
        setEditModalOpen(true);
    };
    var closeEditModal = function (action, editedUser) {
        if (action === 'submit' && editedUser) {
            submitEditedUser(editedUser);
        }
        setEditModalOpen(false);
        setSelectedUser(null);
    };
    var handleSexFilter = function (newSex) {
        if (sexFilter.includes(newSex)) {
            setSexFilter(function (prev) { return prev.filter(function (sex) { return sex !== newSex; }); });
        }
        else {
            setSexFilter(function (prev) { return __spreadArray(__spreadArray([], prev), [newSex]); });
        }
    };
    var filterUsers = function (users) {
        var filteredUsers = [];
        users.forEach(function (user) {
            for (var x = 0; x < sexFilter.length; x += 1) {
                if (user.sex === sexFilter[x]) {
                    filteredUsers.push(user);
                    break;
                }
            }
        });
        return filteredUsers;
    };
    var sortByBirthday = function (users, order) {
        var filteredUsers = __spreadArray([], userData);
        if (order === 'descending') {
            filteredUsers.sort(function (a, b) {
                return birthdayStringToDate_1.default(a.birthday) > birthdayStringToDate_1.default(b.birthday)
                    ? 1
                    : -1;
            });
        }
        else if (order === 'ascending') {
            filteredUsers.sort(function (a, b) {
                return birthdayStringToDate_1.default(a.birthday) < birthdayStringToDate_1.default(b.birthday)
                    ? 1
                    : -1;
            });
        }
        return filteredUsers;
    };
    var sortUsers = function (users, order, listItem) {
        var filteredUsers = users;
        if (order === 'descending') {
            filteredUsers.sort(function (a, b) {
                return a[listItem].toLowerCase() >
                    b[listItem].toLowerCase()
                    ? 1
                    : -1;
            });
        }
        if (order === 'ascending') {
            filteredUsers.sort(function (a, b) {
                return a[listItem].toLowerCase() <
                    b[listItem].toLowerCase()
                    ? 1
                    : -1;
            });
        }
        return filteredUsers;
    };
    var handleSortUsers = function (order, list) {
        var sortedUsers = __spreadArray([], userData);
        if (list === 'birthday') {
            sortedUsers = sortByBirthday(sortedUsers, order);
        }
        else {
            sortedUsers = sortUsers(sortedUsers, order, list);
        }
        setCurrentSort({ property: list, order: order });
        if (sexFilter.length > 0) {
            setVisibleUserData(filterUsers(sortedUsers));
        }
        else {
            setVisibleUserData(sortedUsers);
        }
    };
    var confirmRemoveUser = function (user) {
        setSelectedUser(user);
        setDeleteDialogOpen(true);
    };
    var handleRemoveUser = function () {
        if (selectedUser && selectedUser._id) {
            removeUser(selectedUser._id);
            setSelectedUser(null);
            setDeleteDialogOpen(false);
        }
    };
    react_1.useEffect(function () {
        fetchUserData();
    }, []);
    react_1.useEffect(function () {
        handleSortUsers(currentSort.order, currentSort.property);
    }, [userData, sexFilter]);
    return (<div className={classes.usersMain}>
      <UsersHeader_1.default handleSexFilter={handleSexFilter} sortUsers={handleSortUsers} userData={visibleUserData} sexFilter={sexFilter}/>
      {visibleUserData.map(function (user) { return (<User_1.default key={user._id} user={user} handleRemoveUser={confirmRemoveUser} openEditModal={openEditModal}/>); })}
      {selectedUser && editModalOpen && (<EditModal_1.default editModalOpen={editModalOpen} closeEditModal={closeEditModal} selectedUser={selectedUser}/>)}

      {selectedUser && (<Dialog_1.default open={deleteDialogOpen} onClose={function () { return setDeleteDialogOpen(false); }}>
          <DialogTitle_1.default>
            Confirm deletion of user {selectedUser.firstName}{' '}
            {selectedUser.lastName}?
          </DialogTitle_1.default>
          <DialogActions_1.default>
            <Button_1.default variant="contained" startIcon={<Delete_1.default />} color="secondary" onClick={function () { return handleRemoveUser(); }}>
              Confirm Delete
            </Button_1.default>
            <Button_1.default onClick={function () { return setDeleteDialogOpen(false); }}>Cancel</Button_1.default>
          </DialogActions_1.default>
        </Dialog_1.default>)}
    </div>);
};
exports.default = Users;
//# sourceMappingURL=Users.jsx.map