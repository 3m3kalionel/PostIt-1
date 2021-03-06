import express from 'express';
import GroupController from '../controllers/GroupController';
import sendNotifications from '../controllers/sendNotifications';

const router = express.Router();
router.post('/api/v1/group',
  GroupController.createGroup()
);
router.route('/api/v1/group/:groupId/user')
.post(
  GroupController.permitOnlyGroupMembers(),
  GroupController.addUserToGroup()
)
.delete(
  GroupController.permitOnlyGroupOwner(),
  GroupController.removeUserFromGroup()
);
router.post('/api/v1/group/:groupId/message',
  GroupController.permitOnlyGroupMembers(),
  GroupController.addMessageToGroup(),
  sendNotifications
);
router.get('/api/v1/group/:groupId/messages',
  GroupController.permitOnlyGroupMembers(),
  GroupController.getGroupMessages()
);
router.post('/api/v1/group/:groupId/messages/read',
  GroupController.permitOnlyGroupMembers(),
  GroupController.readGroupMessages()
);
router.get('/api/v1/group/:groupId/message/:messageId/users',
  GroupController.permitOnlyGroupMembers(),
  GroupController.getUsersWithMessageRead()
);
router.get('/api/v1/group/:groupId/users',
  GroupController.permitOnlyGroupMembers(),
  GroupController.getGroupUsers()
);
router.use('/api/v1/group', GroupController.sendResponse());

export default router;
