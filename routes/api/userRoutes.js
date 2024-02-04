const router = require('express').Router();

const {
    getAllUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controller/userController');

// api/users
router.route('/').get(getAllUser).post(createUser);

// api/users/:userId
router.route('/:userId')
.get(getOneUser)
.post(createUser)
.put(updateUser)
.delete(deleteUser);

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;