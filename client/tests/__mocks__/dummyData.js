export const userId = '74542edf-44a7-4b1f-8141-e46354f93d52';
export const selectedUser = {
  username: 'tomipaul',
  email: 'tomi@paul.com',
  phoneNo: '00009992992',
  status: 'user'
};

export const group = {
  id: 3,
  name: 'first_group',
  description: 'This is the first group'
};

export const user = {
  id: 'cb2f423a-36d2-4785-a61d-781a33b04098',
  username: 'tomipaul',
  email: 'tomi@paul.com',
  phoneNo: '353275632723',
  password: '123456',
  token: '12234432653553232'
};

export const message = {
  text: 'This is a message',
  priority: 'urgent'
};

export const savedMessage = {
  id: '62abb38b-6ce9-4ce6-b9f1-e2bee5bb8550',
  text: 'we are here',
  priority: 'critical',
  GroupId: 'first',
  updatedAt: '2017-09-10T09:25:50.316Z',
  createdAt: '2017-09-10T09:25:50.316Z',
  Author: {
    photoURL: null,
    username: 'alienyi01'
  }
};

export const messages = [
  {
    id: '1',
    text: 'This is a message',
    priority: 'critical',
    AuthorUsername: 'tomi',
    GroupId: '1',
    updatedAt: '2017-09-10T09:25:50.316Z',
    createdAt: '2017-09-10T09:25:50.316Z',
    Author: {
      photoURL: null
    }
  },
  {
    id: '2',
    text: 'This is another message',
    priority: 'urgent',
    AuthorUsername: 'paul',
    GroupId: '2',
    updatedAt: '2017-09-10T09:25:50.316Z',
    createdAt: '2017-09-10T09:25:50.316Z',
    Author: {
      photoURL: null
    }
  }
];

export const usersThatHaveReadMessage = [
  {
    createdAt: '2017-08-28 12:30:00.377+01',
    updatedAt: '2017-08-30 16:51:23.131+01',
    MessageId: 1,
    username: 'tomipaul',
    GroupId: 1,
    read: true
  },
  {
    createdAt: '2017-08-28 12:30:00.377+01',
    updatedAt: '2017-08-30 16:51:23.131+01',
    MessageId: 1,
    username: 'alienyi01',
    GroupId: 2,
    read: true
  }
];

export const unreadMessages = {
  first: ['3', '4'],
  second: ['4', '3']
};

export const allUsers = [
  {
    username: 'tomipaul',
    email: 'tomi@paul.com',
    phoneNo: '00009992992',
    status: 'user'
  },
  {
    username: 'emeka',
    email: 'emeka@andela.com',
    phoneNo: '0567577785875',
    status: 'user'
  },
];

export const state = {
  usersWithMessageRead: { 1: usersThatHaveReadMessage },
  unreadMessages,
  users: allUsers,
  auth: {
    isAuthenticated: true,
    user: {
      username: 'tomipaul',
      email: 'tomi@paul.com',
      phoneNo: '00009992992',
      status: 'user',
      photoURL: '/images/silhouette.jpeg'
    }
  },
  activeGroup: 'first',
  userGroups: {
    groups: {
      first: { id: 'first', name: 'group23', description: 'this is group 23' },
      second: { id: 'second', name: 'group24', description: 'this is group 24' }
    },
    groupsById: ['first', 'second']
  },
  requestCount: 0
};
